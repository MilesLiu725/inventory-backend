export class CreatePartDto {
  partNumber: string;
  name: string;
  crossNumbers: string[];
  compatibleModels: string[];
  specification?: string;
  unit: string;
  price: {
    purchasePrice: number;
    retailPrice: number;
    vipPrice: number;
  };
}
