import { render, screen } from '@testing-library/react';
import { SideNav } from './SideNav';

describe('SideNav', () => {
	it('should render', () => {
		render(<SideNav />);
		const testSideNav = screen.getByText('SideNav Initiated!');
		expect(testSideNav).toBeInTheDocument();
	});
});
