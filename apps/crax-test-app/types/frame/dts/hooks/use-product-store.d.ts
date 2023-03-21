import { product } from '~/types/api-types';
declare type immoStoreState = {
    products: product[];
    loadProducts: (products: product[]) => void;
};
export declare const useImmoStore: import("zustand").UseBoundStore<import("zustand").StoreApi<immoStoreState>>;
export {};
