import { render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
	it('renders with custom className', () => {
		const { container } = render(<TextArea className="custom-class" />);
		const textArea = container.querySelector('.TextArea.custom-class');
		expect(textArea).toBeInTheDocument();
	  });
	
	  it('renders with autoFocus', () => {
		// const { container } = render(<TextArea autoFocus={true} />);
		// const textArea = container.querySelector('.TextArea__wrapper__metaInput');
		// expect(textArea).toHaveAttribute('autoFocus');
	  });
	
	  it('renders with label', () => {
		const { container } = render(<TextArea label="Label Text" />);
		const textArea = container.querySelector('.TextArea__label');
		expect(textArea).toHaveTextContent('Label Text');
	  });
	
	  it('renders with status "default"', () => {
		const { container } = render(<TextArea status="default" />);
		const textArea = container.querySelector('.TextArea.default');
		expect(textArea).toBeInTheDocument();
	  });

	  it('renders with status "success"', () => {
		const { container } = render(<TextArea status="success" />);
		const textArea = container.querySelector('.TextArea.success');
		expect(textArea).toBeInTheDocument();
	  });

	  it('renders with status "error"', () => {
		const { container } = render(<TextArea status="error" />);
		const textArea = container.querySelector('.TextArea.error');
		expect(textArea).toBeInTheDocument();
	  });
	
	  it('renders with name attribute', () => {
		const { container } = render(<TextArea name="inputName" />);
		const textArea = container.querySelector('.TextArea__wrapper__metaInput');
		expect(textArea).toHaveAttribute('name', 'inputName');
	  });
	
	  it('renders with placeholder', () => {
		const { container } = render(<TextArea placeholder="Placeholder Text" />);
		const textArea = container.querySelector('.TextArea__wrapper__metaInput');
		expect(textArea).toHaveAttribute('placeholder', 'Placeholder Text');
	  });
	
	  it('renders with metaLabel on the left', () => {
		const { container } = render(<TextArea metaLabel="Meta Label" metaPosition="left" />);
		const metaLabel = container.querySelector('.TextArea__wrapper__metaLabel');
		expect(metaLabel).toHaveClass('left');
	  });
	
	  it('renders with metaLabel on the right', () => {
		const { container } = render(<TextArea metaLabel="Meta Label" metaPosition="right" />);
		const metaLabel = container.querySelector('.TextArea__wrapper__metaLabel.right');
		expect(metaLabel).toBeInTheDocument();
	  });
	
	  it('renders as resizable', () => {
		const { container } = render(<TextArea isResizable={true} />);
		const textArea = container.querySelector('.TextArea__wrapper__metaInput.resizable');
		expect(textArea).toBeInTheDocument();
	  });
});
