import { render, screen } from '@testing-library/react';
import { StepManager } from './StepManager';

describe('StepManager', () => {
	it('should render', () => {
		render(<StepManager />);
		const testStepManager = screen.getByText('StepManager Initiated!');
		expect(testStepManager).toBeInTheDocument();
	});
});
