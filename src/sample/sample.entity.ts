import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Workflow } from 'src/workflow/entities/workflow.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Sample {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field((type) => Int)
  reprocessCount: number;

  @Column()
  @Field((type) => Int)
  barcode: number;

  @OneToMany(() => Workflow, (workflow) => workflow.sample)
  @Field(() => [Workflow], { nullable: true })
  workflows?: Workflow[];
}
