import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
	it('should render', () => {
		render(<Layout />);
		const testLayout = screen.getByText('Layout Initiated!');
		expect(testLayout).toBeInTheDocument();
	});
});
