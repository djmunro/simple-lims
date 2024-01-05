import { Injectable } from '@nestjs/common';
import { Sample } from './sample.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSampleInput } from './dto/create-sample.input';
import { Workflow } from 'src/workflow/entities/workflow.entity';
import { WorkflowService } from 'src/workflow/workflow.service';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepository: Repository<Sample>,
  ) {}

  createSample(createSampleInput: CreateSampleInput): Promise<Sample> {
    const newSample = this.sampleRepository.create(createSampleInput);
    return this.sampleRepository.save(newSample);
  }

  findAll(): Promise<Sample[]> {
    return this.sampleRepository.find();
  }

  findOne(id: number): Promise<Sample> {
    return this.sampleRepository.findOneOrFail({ where: { id } });
  }
}
