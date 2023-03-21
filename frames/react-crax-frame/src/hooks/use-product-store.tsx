import create from 'zustand';
import { product } from '~/types/api-types';

type ProductStoreState = {
	products: product[];
	loadProducts: (products: product[]) => void;
};

export const useProductStore = create<ProductStoreState>((set) => ({
	products: [],
	loadProducts: (products: product[]) => set(() => ({ products: products }))
}));
