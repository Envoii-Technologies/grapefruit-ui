import { render, screen } from '@testing-library/react';
import { ContentWrapper } from './ContentWrapper';

describe('PageContent', () => {
	it('should render', () => {
		render(<ContentWrapper />);
		const testContentWrapper = screen.getByText('ContentWrapper Initiated!');
		expect(testContentWrapper).toBeInTheDocument();
	});
});
