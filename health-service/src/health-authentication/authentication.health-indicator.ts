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
 * A health indicator for the authentication service.
 */
@Injectable()
export class AuthenticationHealthIndicator extends HealthIndicator {
  /**
   * Creates a new instance of the AuthenticationHealthIndicator.
   * @param apiKey The api key for the authentication service using rest.
   * @param apiKeyName The header name of the api key.
   * @param url The url of the authentication service.
   * @param httpService: Service for http requests.
   */
  constructor(
    @Inject(InjectionName.AUTHENTICATION_SERVICE_API_KEY)
    private apiKey: string,
    @Inject(InjectionName.API_KEY_HEADER_NAME) private apiKeyName: string,
    @Inject(InjectionName.AUTHENTICATION_SERVICE) private readonly url: string,
    private readonly httpService: HttpService,
  ) {
    super();
  }

  /**
   * Execute a health check for the authentication service.
   * @param key  The key which will be used as key for the result object.
   * @returns A Promise<T> whose result is a HealthIndicatorResult.
   */
  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      const response = await this.httpService.get(this.url, {
        headers: { [this.apiKeyName]: this.apiKey },
      });
      const { status, info, error, details } = (await firstValueFrom(response))
        .data;

      const result = this.getStatus(key, status?.toLowerCase() === 'ok', {
        info,
        error,
        details,
      });

      if (status?.toLowerCase() === 'ok') {
        return result;
      }

      throw new HealthCheckError('Custom health check failed', status);
    } catch (err) {
      if ((err as HealthCheckError).causes) {
        throw new HealthCheckError(err.message, err.causes);
      }

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
