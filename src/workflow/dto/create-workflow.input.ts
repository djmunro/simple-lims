import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkflowInput {
  @Field()
  name: string;

  @Field((type) => Int)
  sampleId: number;
}
