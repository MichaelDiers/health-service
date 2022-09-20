import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { UsersGrpcHealthIndicator } from '../health-users-grpc/users-grpc-health-indicator';
import { UsersRestHealthIndicator } from '../health-users-rest/users-rest.health-indicator';
import { AccessControlAllowOriginInterceptor } from '../interceptors/access-control-allow-origin.interceptor';
import IHttpCheck from '../types/http-check.interface';
import InjectionName from '../types/injection-name.enum';

/**
 * Controller that provides a route for health checks.
 */
@Controller()
@UseInterceptors(AccessControlAllowOriginInterceptor)
export class HealthController {
  /**
   * Creates a new instance of HealthController.
   * @param healthCheckService Service for checking the health of system components.
   * @param httpHealthIndicator Check the health of http services.
   * @param httpChecks A array of http addresses to be checked.
   * @param healthUsersGrpc A custom health check for grpc users service.
   */
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
    @Inject(InjectionName.HTTP_CHECKS)
    private readonly httpChecks: IHttpCheck[],
    private readonly healthUsersGrpc: UsersGrpcHealthIndicator,
    private readonly healthUsersRest: UsersRestHealthIndicator,
  ) {}

  /**
   * Execute a system health check.
   * @returns The result of the executed health checks.
   */
  @Get()
  @HealthCheck()
  async health(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      () => this.healthUsersRest.isHealthy('Users Service REST'),
      () => this.healthUsersGrpc.isHealthy('Users Service Grpc'),
      ...this.httpChecks.map(
        ({ link, name }) =>
          async () =>
            this.httpHealthIndicator.pingCheck(name, link),
      ),
    ]);
  }
}
