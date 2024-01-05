import { Controller, Get, Param, Render } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get(':id')
  @Render('sample')
  async root(@Param('id') id: number) {
    const sample = await this.sampleService.findOne(id);
    return { sample: JSON.stringify(sample) };
  }
}
