import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configuration.module';
import { ApiKeyGuard } from './api-key.guard';

@Module({
  exports: [ApiKeyGuard],
  imports: [ConfigurationModule],
  providers: [ApiKeyGuard],
})
export class GuardsModule {}
