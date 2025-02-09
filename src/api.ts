import { Car, CarResponse, Filters } from "types";

const BASE_URL = 'https://auto1-mock-server.vercel.app/api';

const getCachedData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const setCachedData = (key: string, data: unknown): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const fetchColors = async (): Promise<{ colors: string[] }> => {
  const cacheKey = 'colors';
  const cachedData = getCachedData<{ colors: string[] }>(cacheKey);
  if (cachedData) return cachedData;
  
  const response = await fetch(`${BASE_URL}/colors`);
  if (!response.ok) throw new Error('Error fetching colors');
  
  const data = await response.json();
  setCachedData(cacheKey, data);
  return data;
};

export const fetchManufacturers = async (): Promise<{ manufacturers: { name: string; models: { name: string }[] }[] }> => {
  const cacheKey = 'manufacturers';
  const cachedData = getCachedData<{ manufacturers: { name: string; models: { name: string }[] }[] }>(cacheKey);
  if (cachedData) return cachedData;
  
  const response = await fetch(`${BASE_URL}/manufacturers`);
  if (!response.ok) throw new Error('Error fetching manufacturers');
  
  const data = await response.json();
  setCachedData(cacheKey, data);
  return data;
};

export const fetchCars = async (page: number, limit = 10, filters?: Filters): Promise<CarResponse> => {
  const cacheKey = `cars_${page}_${limit}_${filters?.manufacturer || 'all'}_${filters?.color || 'all'}`;
  const cachedData = getCachedData<CarResponse>(cacheKey);
  if (cachedData) return cachedData;
  
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...(filters?.manufacturer && { manufacturer: filters.manufacturer }),
    ...(filters?.color && { color: filters.color })
  });
  
  const response = await fetch(`${BASE_URL}/cars?${params.toString()}`);
  if (!response.ok) throw new Error('Error fetching cars');
  
  const data = await response.json();
  setCachedData(cacheKey, data);
  return data;
};

export const fetchCarDetails = async (stockNumber: number): Promise<{ car: Car }> => {
  const cacheKey = `car_${stockNumber}`;
  const cachedData = getCachedData<{ car: Car }>(cacheKey);
  if (cachedData) return cachedData;
  
  const response = await fetch(`${BASE_URL}/cars/${stockNumber}`);
  if (!response.ok) throw new Error('Error fetching car details');
  
  const data = await response.json();
  setCachedData(cacheKey, data);
  return data;
};
