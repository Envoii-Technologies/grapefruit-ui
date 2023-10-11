import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
	it('should render', () => {
		render(<PageHeader />);
	});
});
