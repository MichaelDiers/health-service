import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IHttpCheck from '../types/http-check.interface';
import InjectionName from '../types/injection-name.enum';
import { ConfigModule } from '@nestjs/config';

@Module({
  exports: [InjectionName.HTTP_CHECKS, InjectionName.PORT],
  imports: [ConfigModule.forRoot()],
  providers: [
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
  ],
})
export class ConfigurationModule {}
