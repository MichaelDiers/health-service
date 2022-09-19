import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import InjectionName from '../types/injection-name.enum';

/**
 * Interceptor for response header handling.
 * Adds Access-Control-Allow-Origin and Vary depending on the origin of the request.
 */
@Injectable()
export class AccessControlAllowOriginInterceptor implements NestInterceptor {
  /**
   * Creates a new instance of AccessControlAllowOriginInterceptor.
   * @param accessControlAllowOrigin The header is set only for this origin.
   */
  constructor(
    @Inject(InjectionName.ACCESS_CONTROL_ALLOW_ORIGIN)
    private readonly accessControlAllowOrigin: string,
  ) {}

  /**
   * Intercept the response and set additional headers.
   * @param context The current execution context.
   * @param next The next handler.
   * @returns An Observable<any>.
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const origin = request.get('Origin') as string;
    if (
      origin &&
      this.accessControlAllowOrigin &&
      origin
        .toLowerCase()
        .startsWith(this.accessControlAllowOrigin.toLocaleLowerCase())
    ) {
      const response = context.switchToHttp().getResponse();
      response.set(
        'Access-Control-Allow-Origin',
        this.accessControlAllowOrigin,
      );
      response.set('Vary', 'Origin');
    }

    return next.handle();
  }
}
