import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { products } from '../../stores/productstore';

export function ReactTable() {
  const $products = useStore(products);
  useEffect(() => {
    console.log($products);
  }, [$products]);
  return <div></div>;
}
