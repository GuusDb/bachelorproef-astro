import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPage } from 'inventory/CategoriesPage';
import { HardwarePage } from 'inventory/HardwarePage';
import { ContractsPage } from 'inventory/ContractPage';
import InventoryPage from 'inventory/InventoryPage';
import { ButtonPage } from '../pages/button-page';
import { TablePage } from '../pages/table-page';
import { SharedPage } from '../pages/shared-page';

export function AppRoutes(): ReactElement {
	return (
		<Routes>
			<Route path='/shared' element={<SharedPage />} />
			<Route path='/button' element={<ButtonPage />} />
			<Route path='/table' element={<TablePage />} />
		</Routes>
	);
}
