import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
	it('should render', () => {
		render(<Avatar />);
		// const testAvatar = screen.getByText('Avatar Initiated!');
		// expect(testAvatar).toBeInTheDocument();
	});
});
