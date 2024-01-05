import { Field, InputType, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';

@InputType()
export class CreateSampleInput {
  @Max(3)
  @Field((type) => Int)
  reprocessCount: number;

  @Field((type) => Int)
  barcode: number;
}
