import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { HealthModule } from './health/health.module';
import { HealthUsersGrpcModule } from './health-users-grpc/health-users-grpc.module';
import { HealthUsersRestModule } from './health-users-rest/health-users-rest.module';
import { GuardsModule } from './guards/guards.module';
import { HealthAuthenticationModule } from './health-authentication/health-authentication.module';

@Module({
  imports: [
    ConfigurationModule,
    HealthModule,
    HealthUsersGrpcModule,
    HealthUsersRestModule,
    GuardsModule,
    HealthAuthenticationModule,
  ],
})
export class AppModule {}
