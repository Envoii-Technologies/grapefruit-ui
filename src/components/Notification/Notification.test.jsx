import { render, screen } from '@testing-library/react';
import { Notification } from './Notification';

describe('Notification', () => {
	it('should render', () => {
		render(<Notification />);
		const testNotification = screen.getByText('Notification Initiated!');
		expect(testNotification).toBeInTheDocument();
	});
});
