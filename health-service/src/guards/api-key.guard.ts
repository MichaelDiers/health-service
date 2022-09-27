import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import InjectionName from '../types/injection-name.enum';

/**
 * Guard for validating api keys.
 */
@Injectable()
export class ApiKeyGuard implements CanActivate {
  /**
   * Create a new instance of ApiKeyGuard.
   * @param apiKey A valid api key.
   */
  constructor(
    @Inject(InjectionName.API_KEY) private readonly serviceApiKey: string,
    @Inject(InjectionName.API_KEY_HEADER_NAME)
    private readonly apiKeyHeaderName: string,
  ) {}

  /**
   * Validate the provided api key of the request.
   * @param context The current execution context.
   * @returns True if the api key is valid and false otherwise.
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const headers = request?.headers;

      if (!headers) {
        return false;
      }

      const apiKey = headers[this.apiKeyHeaderName];

      return apiKey === this.serviceApiKey;
    } catch (err) {
      return false;
    }
  }
}
