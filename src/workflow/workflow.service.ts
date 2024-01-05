import { Injectable } from '@nestjs/common';
import { CreateWorkflowInput } from './dto/create-workflow.input';
import { UpdateWorkflowInput } from './dto/update-workflow.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workflow } from './entities/workflow.entity';
import { SampleService } from 'src/sample/sample.service';
import { Sample } from 'src/sample/sample.entity';

@Injectable()
export class WorkflowService {
  constructor(
    @InjectRepository(Workflow)
    private readonly workflowRepository: Repository<Workflow>,
    private readonly sampleService: SampleService,
  ) {}

  create(createWorkflowInput: CreateWorkflowInput) {
    const newWorkflow = this.workflowRepository.create(createWorkflowInput);
    return this.workflowRepository.save(newWorkflow);
  }

  findAll() {
    return this.workflowRepository.find();
  }

  findOne(id: number) {
    return this.workflowRepository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateWorkflowInput: UpdateWorkflowInput) {
    return `This action updates a #${id} workflow`;
  }

  remove(id: number) {
    return `This action removes a #${id} workflow`;
  }

  getSample(sampleId: number): Promise<Sample> {
    return this.sampleService.findOne(sampleId);
  }
}
