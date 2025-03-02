import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): object {
    return { message: 'API is running!', status: 'success' };
  }
}
