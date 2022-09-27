import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IHttpCheck from '../types/http-check.interface';
import InjectionName from '../types/injection-name.enum';
import { ConfigModule } from '@nestjs/config';

/**
 * The prefix for environment variables.
 */
const ENV_PREFIX = 'HEALTH_SERVICE_';

@Module({
  exports: [
    InjectionName.ACCESS_CONTROL_ALLOW_ORIGIN,
    InjectionName.API_KEY,
    InjectionName.API_KEY_HEADER_NAME,
    InjectionName.HTTP_CHECKS,
    InjectionName.PORT,
    InjectionName.USERS_GRPC_SERVICE_URL,
    InjectionName.USERS_GRPC_SERVICE_API_KEY,
    InjectionName.USERS_SERVICE_REST_API_KEY,
    InjectionName.USERS_SERVICE_REST_URL,
  ],
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: InjectionName.ACCESS_CONTROL_ALLOW_ORIGIN,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.ACCESS_CONTROL_ALLOW_ORIGIN}`,
        ),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.API_KEY_HEADER_NAME,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.API_KEY_HEADER_NAME}`,
        ),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.API_KEY,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(`${ENV_PREFIX}${InjectionName.API_KEY}`),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.HTTP_CHECKS,
      useFactory: (configService: ConfigService): IHttpCheck[] => {
        const checks = configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.HTTP_CHECKS}`,
        );
        return JSON.parse(checks);
      },
      inject: [ConfigService],
    },
    {
      provide: InjectionName.PORT,
      useFactory: (configService: ConfigService): number => {
        const port = configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.PORT}`,
        );
        return parseInt(port);
      },
      inject: [ConfigService],
    },
    {
      provide: InjectionName.USERS_GRPC_SERVICE_API_KEY,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.USERS_GRPC_SERVICE_API_KEY}`,
        ),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.USERS_GRPC_SERVICE_URL,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.USERS_GRPC_SERVICE_URL}`,
        ),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.USERS_SERVICE_REST_API_KEY,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.USERS_SERVICE_REST_API_KEY}`,
        ),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.USERS_SERVICE_REST_URL,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow(
          `${ENV_PREFIX}${InjectionName.USERS_SERVICE_REST_URL}`,
        ),
      inject: [ConfigService],
    },
  ],
})
export class ConfigurationModule {}
