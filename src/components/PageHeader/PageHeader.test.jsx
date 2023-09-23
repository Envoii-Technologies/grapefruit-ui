import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
	it('should render', () => {
		render(<PageHeader />);
		const testPageHeader = screen.getByText('PageHeader Initiated!');
		expect(testPageHeader).toBeInTheDocument();
	});
});
