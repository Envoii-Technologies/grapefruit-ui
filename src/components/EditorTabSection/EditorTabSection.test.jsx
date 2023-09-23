import { render, screen } from '@testing-library/react';
import { EditorTabSection } from './EditorTabSection';

describe('EditorTabSection', () => {
	it('should render', () => {
		render(<EditorTabSection />);
		const testEditorTabSection = screen.getByText('EditorTabSection Initiated!');
		expect(testEditorTabSection).toBeInTheDocument();
	});
});
