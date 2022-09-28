import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { firstValueFrom } from 'rxjs';
import InjectionName from '../types/injection-name.enum';

/**
 * A custom health check for the users service using rest.
 */
@Injectable()
export class UsersRestHealthIndicator extends HealthIndicator {
  /**
   * Creates a new instance of the UsersGrpcHealthIndicator.
   * @param apiKey The api key for the users service using rest.
   * @param apiKeyName The header name of the api key.
   * @param url The url of the users service.
   * @param httpService: Service for http requests.
   */
  constructor(
    @Inject(InjectionName.USERS_SERVICE_REST_API_KEY) private apiKey: string,
    @Inject(InjectionName.API_KEY_HEADER_NAME) private apiKeyName: string,
    @Inject(InjectionName.USERS_SERVICE_REST_URL) private readonly url: string,
    private readonly httpService: HttpService,
  ) {
    super();
  }

  /**
   * Execute a health check for the users service.
   * @param key  The key which will be used as key for the result object.
   * @returns A Promise<T> whose result is a HealthIndicatorResult.
   */
  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      const response = this.httpService.get(this.url, {
        headers: { [this.apiKeyName]: this.apiKey },
      });
      const { status, info, error, details } = (await firstValueFrom(response))
        .data;
      return this.getStatus(key, status?.toLowerCase() === 'ok', {
        info,
        error,
        details,
      });
    } catch (err) {
      if (err?.response?.data) {
        const { info, error, details } = err.response.data;
        const result = this.getStatus(key, false, { info, error, details });
        throw new HealthCheckError('Custom health check failed', result);
      }

      throw new HealthCheckError(
        'Custom health check failed',
        this.getStatus(key, false, { error: err.message }),
      );
    }
  }
}
