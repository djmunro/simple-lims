import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleService } from './sample/sample.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sampleService: SampleService,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const samples = await this.sampleService.findAll();
    return { samples };
  }
}
