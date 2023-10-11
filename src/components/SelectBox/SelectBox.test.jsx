import { render, screen } from '@testing-library/react';
import { SelectBox } from './SelectBox';

describe('SelectBox', () => {
	it('should render', () => {
		render(<SelectBox />);
		const testSelect = screen.getByText('SelectBox Initiated!');
		expect(testSelect).toBeInTheDocument();
	});
});
