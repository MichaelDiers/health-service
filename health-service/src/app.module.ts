import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { HealthModule } from './health/health.module';
import { HealthUsersGrpcModule } from './health-users-grpc/health-users-grpc.module';

@Module({
  imports: [ConfigurationModule, HealthModule, HealthUsersGrpcModule],
})
export class AppModule {}
