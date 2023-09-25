import { render, screen } from '@testing-library/react';
import { PageMenu } from './PageMenu';

describe('PageMenu', () => {
	it('renders with custom class name', () => {
		const { container } = render(<PageMenu className="custom-menu" />);
		const menu = container.querySelector('.PageMenu.custom-menu');
		expect(menu).toBeInTheDocument();
	  });

	  it('renders with menu expanded', () => {
		const { container } = render(<PageMenu isMenuExpanded={true} />);
		const menuSub = container.querySelector('.PageMenuSub');
		expect(menuSub).toHaveClass('expanded');
	  });
});
