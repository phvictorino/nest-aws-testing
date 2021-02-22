import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Service } from './upload/service';

@Controller('aws')
export class AwsController {
  constructor(private readonly uploadService: Service) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: any) {
    return this.uploadService.execute('123', file);
  }
}
