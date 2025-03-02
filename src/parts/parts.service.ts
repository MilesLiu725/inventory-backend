import { Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';

@Injectable()
export class PartsService {
  private parts = [];

  getAllParts() {
    return this.parts;
  }

  createPart(createPartDto: CreatePartDto) {
    const newPart = { id: this.parts.length + 1, ...createPartDto };
    this.parts.push(newPart);
    return newPart;
  }
}
