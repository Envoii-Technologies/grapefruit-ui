import { render, screen } from '@testing-library/react';
import { PageWrapper } from './PageWrapper';

describe('PageWrapper', () => {
	it('should render', () => {
		render(<PageWrapper />);
		const testPageWrapper = screen.getByText('PageWrapper Initiated!');
		expect(testPageWrapper).toBeInTheDocument();
	});
});
