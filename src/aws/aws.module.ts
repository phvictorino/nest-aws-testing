import { Module } from '@nestjs/common';
import { AwsController } from './aws.controller';
import { Service } from './upload/service';

@Module({
  controllers: [AwsController],
  providers: [Service],
})
export class AwsModule {}
