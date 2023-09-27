import { render, screen } from '@testing-library/react';
import { PopOver } from './PopOver';

describe('PopOver', () => {
	it('should render', () => {
		render(<PopOver />);
		const testPopOver = screen.getByText('PopOver Initiated!');
		expect(testPopOver).toBeInTheDocument();
	});
});
