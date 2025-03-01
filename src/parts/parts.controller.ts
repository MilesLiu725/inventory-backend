import { Controller, Get } from '@nestjs/common';

@Controller('parts')  // 这里必须指定 'parts'
export class PartsController {
  @Get()
  findAll() {
    return { message: 'Parts API is working!', status: 'success' };
  }
}
