import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('SideBar', () => {
	it('should render', () => {
		render(<SideBar />);
		const testSideBar = screen.getByText('SideBar Initiated!');
		expect(testSideBar).toBeInTheDocument();
	});
});
