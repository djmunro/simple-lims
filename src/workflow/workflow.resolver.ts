import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { WorkflowService } from './workflow.service';
import { Workflow } from './entities/workflow.entity';
import { CreateWorkflowInput } from './dto/create-workflow.input';
import { UpdateWorkflowInput } from './dto/update-workflow.input';
import { Sample } from 'src/sample/sample.entity';

@Resolver(() => Workflow)
export class WorkflowResolver {
  constructor(private readonly workflowService: WorkflowService) {}

  @Mutation(() => Workflow)
  createWorkflow(
    @Args('createWorkflowInput') createWorkflowInput: CreateWorkflowInput,
  ) {
    return this.workflowService.create(createWorkflowInput);
  }

  @Query(() => [Workflow], { name: 'workflows' })
  findAll() {
    return this.workflowService.findAll();
  }

  @Query(() => Workflow, { name: 'workflow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workflowService.findOne(id);
  }

  @ResolveField((returns) => Sample)
  sample(@Parent() workflow: Workflow): Promise<Sample> {
    return this.workflowService.getSample(workflow.sampleId);
  }

  @Mutation(() => Workflow)
  updateWorkflow(
    @Args('updateWorkflowInput') updateWorkflowInput: UpdateWorkflowInput,
  ) {
    return this.workflowService.update(
      updateWorkflowInput.id,
      updateWorkflowInput,
    );
  }

  @Mutation(() => Workflow)
  removeWorkflow(@Args('id', { type: () => Int }) id: number) {
    return this.workflowService.remove(id);
  }
}
