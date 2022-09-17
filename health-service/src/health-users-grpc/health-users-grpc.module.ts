import { Module } from '@nestjs/common';
import { UsersGrpcHealthIndicator } from './users-grpc-health-indicator';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { credentials } from '@grpc/grpc-js';
import InjectionName from '../types/injection-name.enum';
import { ConfigurationModule } from '../configuration/configuration.module';

@Module({
  exports: [UsersGrpcHealthIndicator],
  imports: [ConfigurationModule],
  providers: [
    UsersGrpcHealthIndicator,
    {
      provide: InjectionName.USERS_GRPC_CLIENT,
      useFactory: (url: string) => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: 'users',
            protoPath: join(__dirname, 'users.proto'),
            url,
            credentials: credentials.createSsl(),
          },
        });
      },
      inject: [InjectionName.USERS_GRPC_SERVICE_URL],
    },
  ],
})
export class HealthUsersGrpcModule {}
