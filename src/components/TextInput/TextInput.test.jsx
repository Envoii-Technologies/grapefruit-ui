import { render, screen } from '@testing-library/react';
import { TextInput } from './TextInput';


describe('NumberInput', () => {
	it('renders with default props', () => {
	  const { container } = render(<TextInput />);
	  const textInput = container.querySelector('.TextInput');
	  expect(textInput).toBeInTheDocument();
	  expect(textInput).toHaveClass('default');
	  expect(textInput).not.toHaveClass('success');
	  expect(textInput).not.toHaveClass('error');
	  const inputElement = container.querySelector('input[type="text"]');
	  expect(inputElement).toBeInTheDocument();
	});
  
	it('renders with custom props', () => {
	  const { container } = render(
		<TextInput
		  className="custom-number-input"
		  autoFocus={true}
		  label="Custom Label"
		  type="text"
		  status="success"
		  name="customName"
		  placeholder="Custom Placeholder"
		  metaLabel="Meta Label"
		  metaPosition="right"
		/>
	  );
	  const textInput = container.querySelector('.custom-number-input');
	  expect(textInput).toBeInTheDocument();
	  expect(textInput).toHaveClass('success');
	  const inputElement = container.querySelector('input[type="text"]');
	  expect(inputElement).toBeInTheDocument();
	  expect(inputElement).toHaveAttribute('name', 'customName');
	  expect(inputElement).toHaveAttribute('placeholder', 'Custom Placeholder');
	  const metaLabelElement = container.querySelector('.NumberInput__wrapper__metaLabel');
	  expect(metaLabelElement).toBeInTheDocument();
	  expect(metaLabelElement).toHaveTextContent('Meta Label');
	  expect(metaLabelElement).toHaveClass('right');
	});
  
	it('handles custom class names', () => {
	  const { container } = render(<TextInput className="custom-class" />);
	  const textInput = container.querySelector('.custom-class');
	  expect(textInput).toBeInTheDocument();
	});
  
	it('renders with metaPosition "left"', () => {
	  const { container } = render(<TextInput metaPosition="left" metaLabel="Hello World" />);
	  const metaLabelElement = container.querySelector('.NumberInput__wrapper__metaLabel.left');
	  expect(metaLabelElement).toBeInTheDocument();
	});
  
	it('renders with metaPosition "right"', () => {
	  const { container } = render(<TextInput metaPosition="right" metaLabel="Hello World" />);
	  const metaLabelElement = container.querySelector('.NumberInput__wrapper__metaLabel.right');
	  expect(metaLabelElement).toBeInTheDocument();
	});

	it('renders with default status', () => {
		const { container } = render(<TextInput />);
		const textInput = container.querySelector('.TextInput');
		expect(textInput).toHaveClass('default');
	  });
	
	  it('renders with "success" status', () => {
		const { container } = render(<TextInput status="success" />);
		const textInput = container.querySelector('.TextInput');
		expect(textInput).toHaveClass('success');
	  });
	
	  it('renders with "error" status', () => {
		const { container } = render(<TextInput status="error" />);
		const textInput = container.querySelector('.TextInput');
		expect(textInput).toHaveClass('error');
	  });
  });
  