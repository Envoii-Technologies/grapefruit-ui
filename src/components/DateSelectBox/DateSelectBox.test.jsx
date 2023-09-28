import { render, screen } from '@testing-library/react';
import { DateSelectBox } from './DateSelectBox';

describe('DateSelectBox', () => {
	it('should render', () => {
		render(<DateSelectBox />);
		const testDateSelectBox = screen.getByText('DateSelectBox Initiated!');
		expect(testDateSelectBox).toBeInTheDocument();
	});
});
