import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ButtonPage } from '../pages/button-page';
import { TablePage } from '../pages/table-page';
import { SharedPage } from '../pages/shared-page';
import { TitlePage } from '../pages/title-page';

export function AppRoutes(): ReactElement {
	return (
		<Routes>
			<Route path='/' element={<TitlePage />} />
			<Route path='/shared' element={<SharedPage />} />
			<Route path='/button' element={<ButtonPage />} />
			<Route path='/table' element={<TablePage />} />
		</Routes>
	);
}
