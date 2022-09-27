import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configuration.module';
import { UsersRestHealthIndicator } from './users-rest.health-indicator';

@Module({
  exports: [UsersRestHealthIndicator],
  imports: [ConfigurationModule, HttpModule],
  providers: [UsersRestHealthIndicator],
})
export class HealthUsersRestModule {}
