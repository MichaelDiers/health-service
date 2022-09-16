import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigurationModule } from '../configuration/configuration.module';
import { HealthController } from './health.controller';

@Module({
  controllers: [HealthController],
  imports: [ConfigurationModule, HttpModule, TerminusModule],
})
export class HealthModule {}
