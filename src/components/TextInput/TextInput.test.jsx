import { render, screen } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
	it('should render', () => {
		render(<TextInput />);
	});
});
