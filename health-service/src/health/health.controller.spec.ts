import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationModule } from '../configuration/configuration.module';
import { GuardsModule } from '../guards/guards.module';
import { HealthAuthenticationModule } from '../health-authentication/health-authentication.module';
import { HealthUsersGrpcModule } from '../health-users-grpc/health-users-grpc.module';
import { HealthUsersRestModule } from '../health-users-rest/health-users-rest.module';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      imports: [
        ConfigurationModule,
        GuardsModule,
        HttpModule,
        TerminusModule,
        HealthUsersGrpcModule,
        HealthUsersRestModule,
        HealthAuthenticationModule,
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
