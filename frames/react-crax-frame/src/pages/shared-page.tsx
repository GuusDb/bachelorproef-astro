import { Button } from 'test/Button';
import { Table } from 'test/Table';
import { Title } from '../components/Title';

export function SharedPage() {
	return (
		<div>
			<Title />
			<div>
				<Button />
			</div>
			<Table />
		</div>
	);
}
