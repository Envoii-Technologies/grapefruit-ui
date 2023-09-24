import { render, screen } from '@testing-library/react';
import { ContentBox } from './ContentBox';

describe('ContentBox', () => {
	it('should render', () => {
		render(<ContentBox />);
	});
});
