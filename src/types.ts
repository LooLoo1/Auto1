export interface Mileage {
  number: number;
  unit: string;
}

export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: Mileage;
  fuelType: string;
  color: string;
  pictureUrl: string;
}

export interface CarResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}

export interface Filters {
  manufacturer?: string;
  color?: string;
}
