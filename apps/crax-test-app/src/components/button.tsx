import { useState } from 'react';
import { product } from 'types/frame/apiTypes';
import { useProductStore } from 'frame/useProductStore';
import { getAll } from '../api/getAll';

export function Button() {
	const [clickCount, setClickCount] = useState<number>(0);
	const { loadProducts } = useProductStore();

	const callAsync = async () => {
		let res: product[] = await getAll();
		loadProducts(res);
	};

	const handleClick = async () => {
		setClickCount(clickCount + 1);
		callAsync();
	};
	return (
		<div style={{ marginLeft: '2rem' }}>
			<p>{clickCount}</p>
			<button onClick={handleClick}>click</button>
		</div>
	);
}
