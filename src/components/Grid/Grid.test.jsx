import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
	it('should render', () => {
		render(<Grid />);
		const testGrid = screen.getByText('Grid Initiated!');
		expect(testGrid).toBeInTheDocument();
	});
});
