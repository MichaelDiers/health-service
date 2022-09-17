import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IHttpCheck from '../types/http-check.interface';
import InjectionName from '../types/injection-name.enum';
import { ConfigModule } from '@nestjs/config';

@Module({
  exports: [
    InjectionName.API_KEY_HEADER_NAME,
    InjectionName.HTTP_CHECKS,
    InjectionName.PORT,
    InjectionName.USERS_GRPC_SERVICE_URL,
    InjectionName.USERS_GRPC_SERVICE_API_KEY,
  ],
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: InjectionName.API_KEY_HEADER_NAME,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow('HEALTH_SERVICE_API_KEY_HEADER_NAME'),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.HTTP_CHECKS,
      useFactory: (configService: ConfigService): IHttpCheck[] => {
        const checks = configService.getOrThrow('HEALTH_SERVICE_HTTP_LINKS');
        return JSON.parse(checks);
      },
      inject: [ConfigService],
    },
    {
      provide: InjectionName.PORT,
      useFactory: (configService: ConfigService): number => {
        const port = configService.getOrThrow('HEALTH_SERVICE_PORT');
        return parseInt(port);
      },
      inject: [ConfigService],
    },
    {
      provide: InjectionName.USERS_GRPC_SERVICE_API_KEY,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow('HEALTH_SERVICE_USERS_GRPC_SERVICE_API_KEY'),
      inject: [ConfigService],
    },
    {
      provide: InjectionName.USERS_GRPC_SERVICE_URL,
      useFactory: (configService: ConfigService): string =>
        configService.getOrThrow('HEALTH_SERVICE_USERS_GRPC_SERVICE'),
      inject: [ConfigService],
    },
  ],
})
export class ConfigurationModule {}
