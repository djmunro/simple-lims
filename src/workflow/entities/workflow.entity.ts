import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Sample } from 'src/sample/sample.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Workflow {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => Int)
  sampleId: number;

  @ManyToOne(() => Sample, (sample) => sample.workflows)
  @Field((type) => Sample)
  sample: Sample;
}
