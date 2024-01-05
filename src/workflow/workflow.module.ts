import { Module } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkflowResolver } from './workflow.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workflow } from './entities/workflow.entity';
import { SampleModule } from 'src/sample/sample.module';

@Module({
  imports: [TypeOrmModule.forFeature([Workflow]), SampleModule],
  providers: [WorkflowResolver, WorkflowService],
})
export class WorkflowModule {}
