import { Inject, Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { ClientGrpc } from '@nestjs/microservices';
import IGrpcUsersService from './grpc-users-service.interface';
import { Metadata } from '@grpc/grpc-js';
import { firstValueFrom } from 'rxjs';
import InjectionName from '../types/injection-name.enum';

/**
 * A custom health check for the users grpc service.
 */
@Injectable()
export class UsersGrpcHealthIndicator extends HealthIndicator {
  /**
   * Creates a new instance of the UsersGrpcHealthIndicator.
   * @param client The client that is used to generate the users grpc client.
   * @param apiKey The api key for the users grpc service.
   * @param apiKeyName The metadata entry name for the users grpc service.
   */
  constructor(
    @Inject(InjectionName.USERS_GRPC_CLIENT) private client: ClientGrpc,
    @Inject(InjectionName.USERS_GRPC_SERVICE_API_KEY) private apiKey: string,
    @Inject(InjectionName.API_KEY_HEADER_NAME) private apiKeyName: string,
  ) {
    super();
  }

  /**
   * Execute a health check for the users grpc service.
   * @param key  The key which will be used as key for the result object.
   * @returns A Promise<T> whose result is a HealthIndicatorResult.
   */
  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const service =
      this.client.getService<IGrpcUsersService>('GrpcUsersService');
    const metadata = new Metadata();
    metadata.add(this.apiKeyName, this.apiKey);
    try {
      const response = await service.healthCheck({}, metadata);
      await firstValueFrom(response);
      return this.getStatus(key, true, { info: 'Up and running' });
    } catch (err) {
      throw new HealthCheckError(
        'Custom health check failed',
        this.getStatus(key, false, {
          info: 'service is down',
          error: err.message,
        }),
      );
    }
  }
}
