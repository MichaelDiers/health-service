import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigurationModule } from '../configuration/configuration.module';
import { HealthAuthenticationModule } from '../health-authentication/health-authentication.module';
import { HealthUsersGrpcModule } from '../health-users-grpc/health-users-grpc.module';
import { HealthUsersRestModule } from '../health-users-rest/health-users-rest.module';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController],
  imports: [
    HealthAuthenticationModule,
    ConfigurationModule,
    HttpModule,
    TerminusModule,
    HealthUsersGrpcModule,
    HealthUsersRestModule,
  ],
})
export class HealthModule {}
