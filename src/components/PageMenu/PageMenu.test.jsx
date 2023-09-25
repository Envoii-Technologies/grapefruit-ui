import React from 'react';

import { render, screen } from '@testing-library/react';
import { PageMenu } from './PageMenu';

import mockUser from './../../data/mockUser';

describe('PageMenu', () => {
	it('renders with custom class name', () => {
		const { container } = render(<PageMenu className="custom-menu" userData={mockUser.us} />);
		const menu = container.querySelector('.PageMenu.custom-menu');
		expect(menu).toBeInTheDocument();
	  });

	  it('renders with menu expanded', () => {
		const { container } = render(<PageMenu isMenuExpanded={true} />);
		const menuSub = container.querySelector('.PageMenuSub');
		expect(menuSub).toHaveClass('expanded');
	  });
});
