import { render, screen } from '@testing-library/react';
import { PageContent } from './PageContent';

describe('PageContent', () => {
	it('should render', () => {
		render(<PageContent />);
		const testPageContent = screen.getByText('PageContent Initiated!');
		expect(testPageContent).toBeInTheDocument();
	});
});
