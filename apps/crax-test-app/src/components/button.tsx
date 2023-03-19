import { useState } from 'react';

export function Button() {
	/* const {
        isLoading,
        data: immos,
        isError,
      } = useGet<produ[]>('Immo', '/immo');*/

	const [clickCount, setClickCount] = useState<number>(0);
	const handleClick = () => {
		setClickCount(clickCount + 1);
	};

	return (
		<div>
			<p>{clickCount}</p>
			<button onClick={handleClick}></button>
		</div>
	);
}
