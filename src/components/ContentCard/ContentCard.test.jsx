import { render, screen } from '@testing-library/react';
import { ContentCard } from './ContentCard';
import { ContentCardFooter } from './ContentCardFooter';
import { ContentCardHeader } from './ContentCardHeader';
import { ContentCardBody } from './ContentCardBody';

describe('ContentCard', () => {
	it('should render', () => {
		render(<ContentCard />);
		const testContentCard = screen.getByText('ContentCard Initiated!');
		expect(testContentCard).toBeInTheDocument();
	});
});
