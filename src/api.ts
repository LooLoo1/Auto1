import { Car, CarResponse, Filters } from "types"

const BASE_URL = 'https://auto1-mock-server.vercel.app/api';

export const fetchColors = async (): Promise<{ colors: string[] }> => {
  const response = await fetch(`${BASE_URL}/colors`);
  if (!response.ok) {
    throw new Error('Error fetching colors');
  }
  return response.json();
};

export const fetchManufacturers = async (): Promise<{ manufacturers: { name: string; models: { name: string }[] }[] }> => {
  const response = await fetch(`${BASE_URL}/manufacturers`);
  if (!response.ok) {
    throw new Error('Error fetching manufacturers');
  }
  return response.json();
};

export const fetchCars = async (page: number, limit = 10, filters?: Filters): Promise<CarResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(filters?.manufacturer && { manufacturer: filters.manufacturer }),
    ...(filters?.color && { color: filters.color })
  });

  const response = await fetch(`${BASE_URL}/cars?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Error fetching cars');
  }
  return response.json();
};

export const fetchCarDetails = async (stockNumber: number): Promise<Car> => {
  const response = await fetch(`${BASE_URL}/cars/${stockNumber}`);
  if (!response.ok) {
    throw new Error('Error fetching car details');
  }
  return response.json();
};
