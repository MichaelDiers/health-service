import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Interceptor for response header handling.
 * Adds Access-Control-Allow-Origin and Vary depending on the origin of the request.
 */
@Injectable()
export class AccessControlAllowOriginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.get('Origin') === 'http://localhost:3000') {
      const response = context.switchToHttp().getResponse();
      response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      response.set('Vary', 'Origin');
    }

    return next.handle();
  }
}
