import { useState } from 'react';

export function Button() {
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
