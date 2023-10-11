import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
	it('should render', () => {
		render(<Table />);
		const testTable = screen.getByText('Table Initiated!');
		expect(testTable).toBeInTheDocument();
	});
});
