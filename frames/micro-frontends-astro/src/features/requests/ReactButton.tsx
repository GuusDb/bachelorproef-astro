import { useState } from 'react';
import { getAll } from '../../api/getproducts';
import { fillProducts } from '../../stores/productstore';
import type { product } from '../../types/api-types';

export const ReactButton = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const callAsync = async () => {
    let res: product[] = await getAll();
    fillProducts(res);
  };

  const handleClick = async () => {
    setClickCount(clickCount + 1);
    callAsync();
  };
  return (
    <div>
      <p>{clickCount}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
};
