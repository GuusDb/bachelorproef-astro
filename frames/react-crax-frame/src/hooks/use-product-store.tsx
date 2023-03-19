import create from 'zustand';
import { product } from '~/types/api-types';

type immoStoreState = {
	products: product[];
	loadProducts: (products: product[]) => void;
};

export const useImmoStore = create<immoStoreState>((set) => ({
	products: [],
	loadProducts: (products: product[]) => set(() => ({ products: products }))
}));
