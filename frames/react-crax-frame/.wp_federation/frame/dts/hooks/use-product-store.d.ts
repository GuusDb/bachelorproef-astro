import { product } from '~/types/api-types';
declare type ProductStoreState = {
    products: product[];
    loadProducts: (products: product[]) => void;
};
export declare const useProductStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ProductStoreState>>;
export {};
