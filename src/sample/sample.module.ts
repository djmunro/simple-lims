import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleResolver } from './sample.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './sample.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  providers: [SampleService, SampleResolver],
  exports: [SampleService],
})
export class SampleModule {}
