import { useEffect } from 'react';
import { product } from 'types/frame/apiTypes';
import { useProductStore } from 'frame/useProductStore';

export function Table() {
	const { products } = useProductStore();
	useEffect(() => {
		console.log(products);
	}, [products]);
	return (
		<table>
			<tr>
				<th scope='col'>id</th>
				<th scope='col'>title</th>
				<th scope='col'>price</th>
				<th scope='col'>category</th>
				<th scope='col'>description</th>
				<th scope='col'>image</th>
			</tr>
			{products.map((product: product) => {
				return (
					<tr>
						<td scope='row'>{product.id}</td>
						<td scope='row'>{product.title}</td>
						<td scope='row'>{product.price}</td>
						<td scope='row'>{product.category}</td>
						<td scope='row'>{product.description}</td>
						<td scope='row'>
							<img src={product.image} style={{ width: '8vw' }} />
						</td>
					</tr>
				);
			})}
		</table>
	);
}
