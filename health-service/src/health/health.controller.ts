import { Controller, Get, Inject } from '@nestjs/common';
import { HealthCheck, HealthCheckResult, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import IHttpCheck from '../types/http-check.interface';
import InjectionName from '../types/injection-name.enum';

/**
 * Controller that provides a route for health checks.
 */
@Controller('health')
export class HealthController {
  /**
   * Creates a new instance of HealthController.
   * @param healthCheckService Service for checking the health of system components.
   * @param httpHealthIndicator Check the health of http services. 
   * @param httpChecks A array of http addresses to be checked.
   */
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
    @Inject(InjectionName.HTTP_CHECKS) private readonly httpChecks: IHttpCheck[],
  ) {}

  /**
   * Execute a system health check.
   * @returns The result of the executed health checks.
   */
  @Get()
  @HealthCheck()
  async health(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      ...this.httpChecks.map(({ link, name }) => async () => this.httpHealthIndicator.pingCheck(name, link)),
    ]);
  }
}
