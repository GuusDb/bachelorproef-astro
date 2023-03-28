import { atom } from 'nanostores';
import type { product } from '../types/api-types';

export const products = atom<product[]>([]);

export function fillProducts(apiProducts: product[]) {
  products.set(apiProducts);
}
