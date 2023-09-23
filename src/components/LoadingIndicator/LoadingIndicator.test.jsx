import { render, screen } from '@testing-library/react';
import { LoadingIndicator } from './LoadingIndicator';

describe('LoadingIndicator', () => {
	it('should render', () => {
		render(<LoadingIndicator />);
		const testLoadingIndicator = screen.getByText('LoadingIndicator Initiated!');
		expect(testLoadingIndicator).toBeInTheDocument();
	});
});
