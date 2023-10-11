import { render, screen } from '@testing-library/react';
import { ModalWindow } from './ModalWindow';

describe('ModalWindow', () => {
	it('should render', () => {
		render(<ModalWindow />);
		const testModalWindow = screen.getByText('ModalWindow Initiated!');
		expect(testModalWindow).toBeInTheDocument();
	});
});
