import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('parts')
export class PartsController {
  private parts = [];

  @Get()
  getParts() {
    return this.parts;
  }

  @Post()
  addPart(@Body() part) {
    this.parts.push(part);
    return { message: 'Part added successfully', part };
  }
}
