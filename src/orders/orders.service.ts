import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getOrders() {
    return [{ id: 1, status: 'Pending' }];
  }
}

