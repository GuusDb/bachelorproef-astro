import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

import styles from './page-container.scss';

export type PageContainerProps = {
	children?: ReactNode;
};

export function PageContainer(props: PageContainerProps): ReactElement {
	const { children } = props;

	return <Box className={styles['page-container']}>{children}</Box>;
}
