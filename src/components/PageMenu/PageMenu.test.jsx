import { render, screen } from '@testing-library/react';
import { PageMenu } from './PageMenu';

describe('PageMenu', () => {
	it('should render', () => {
		render(<PageMenu />);
		const testPageMenu = screen.getByText('PageMenu Initiated!');
		expect(testPageMenu).toBeInTheDocument();
	});
});
