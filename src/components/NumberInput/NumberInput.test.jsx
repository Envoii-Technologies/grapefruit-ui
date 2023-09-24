import { render, screen } from '@testing-library/react';
import { NumberInput } from './NumberInput';

describe('NumberInput', () => {
	it('should render', () => {
		render(<NumberInput />);
	});
});
