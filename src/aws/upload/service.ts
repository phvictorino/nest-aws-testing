import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class Service {
  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      region: this.configService.get('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY'),
        secretAccessKey: this.configService.get('AWS_SECRET_KEY'),
      },
    });
  }

  private readonly s3: S3;

  execute(key: string, file: any): Promise<any> {
    console.log(file);
    return this.s3
      .putObject({
        Key: key,
        Bucket: this.configService.get('AWS_BUCKET'),
        Body: file.buffer,
      })
      .promise();
  }
}
