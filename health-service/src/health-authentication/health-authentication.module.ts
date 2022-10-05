import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configuration.module';
import { AuthenticationHealthIndicator } from './authentication.health-indicator';

@Module({
  exports: [AuthenticationHealthIndicator],
  imports: [ConfigurationModule, HttpModule],
  providers: [AuthenticationHealthIndicator],
})
export class HealthAuthenticationModule {}
