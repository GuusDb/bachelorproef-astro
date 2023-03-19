import type { product } from '../types/api-types';

export async function getAll(): Promise<product[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data as product[];
}
