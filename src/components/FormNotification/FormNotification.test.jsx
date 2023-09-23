import { render, screen } from '@testing-library/react';
import { FormNotification } from './FormNotification';

describe('FormNotification', () => {
	// render component
	it('should render', () => {
		render(<FormNotification />);
		const testFormNotification = screen.getByText('[DEFAULT MESSAGE]');
		expect(testFormNotification).toBeInTheDocument();
	});

	// custom class
	it('should render with a custom class', () => {
		const { container } = render(<FormNotification className="test-class" />)
		expect(container.getElementsByClassName('test-class').length).toBe(1);
	});

	// success state
	it('should render success message', () => {
		const { container } = render(<FormNotification type="success" />)
		expect(container.getElementsByClassName('FormNotification success').length).toBe(1);
		expect(container.getElementsByClassName('FormNotification__wrapper__icon success').length).toBe(1);
	});

	// warning state
	it('should render warning message', () => {
		const { container } = render(<FormNotification type="warning" />)
		expect(container.getElementsByClassName('FormNotification warning').length).toBe(1);
		expect(container.getElementsByClassName('FormNotification__wrapper__icon warning').length).toBe(1);
	});

	// error state
	it('should render error message', () => {
		const { container } = render(<FormNotification type="error" />)
		expect(container.getElementsByClassName('FormNotification error').length).toBe(1);
		expect(container.getElementsByClassName('FormNotification__wrapper__icon error').length).toBe(1);
	});
});
