import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SampleService } from './sample.service';
import { Sample } from './sample.entity';
import { CreateSampleInput } from './dto/create-sample.input';

@Resolver((of) => Sample)
export class SampleResolver {
  constructor(private readonly sampleService: SampleService) {}

  @Query((returns) => [Sample], { name: 'samples' })
  findAll(): Promise<Sample[]> {
    return this.sampleService.findAll();
  }

  @Query((returns) => Sample, { name: 'sample' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Sample> {
    return this.sampleService.findOne(id);
  }

  @Mutation((returns) => Sample)
  createSample(
    @Args('createSampleInput') createSampleInput: CreateSampleInput,
  ): Promise<Sample> {
    return this.sampleService.createSample(createSampleInput);
  }
}
