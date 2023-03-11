import { ReactElement } from 'react';

export type CraxitLogoProps = {
	className?: string;
};

export function CraxitLogo(props: CraxitLogoProps): ReactElement {
	const { className } = props;

	return (
		<img
			className={className}
			src='./images/craxit-logo.png'
			alt='CraxIt logo'
		/>
	);
}
