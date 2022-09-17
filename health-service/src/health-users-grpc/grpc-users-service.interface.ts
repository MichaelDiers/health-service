import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

/**
 * Describes the users grpc service.
 */
export default interface IGrpcUsersService {
  /**
   * Execute a simple health check.
   * @param data The data is not processed.
   * @param metadata The request metadata that includes the api key.
   * @returns A Promise<T> with an empty result.
   */
  healthCheck(data: any, metadata: Metadata): Observable<any>;
}
