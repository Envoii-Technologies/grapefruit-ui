import React from 'react';
import { render } from '@testing-library/react';
import { NumberInput } from './NumberInput';

describe('NumberInput', () => {
  it('renders with default props', () => {
    const { container } = render(<NumberInput />);
    const numberInput = container.querySelector('.NumberInput');
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveClass('default');
    expect(numberInput).not.toHaveClass('success');
    expect(numberInput).not.toHaveClass('error');
    const inputElement = container.querySelector('input[type="number"]');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const { container } = render(
      <NumberInput
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
    const numberInput = container.querySelector('.custom-number-input');
    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveClass('success');
    const inputElement = container.querySelector('input[type="number"]');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'customName');
    expect(inputElement).toHaveAttribute('placeholder', 'Custom Placeholder');
    const metaLabelElement = container.querySelector('.NumberInput__wrapper__metaLabel');
    expect(metaLabelElement).toBeInTheDocument();
    expect(metaLabelElement).toHaveTextContent('Meta Label');
    expect(metaLabelElement).toHaveClass('right');
  });

  it('handles custom class names', () => {
    const { container } = render(<NumberInput className="custom-class" />);
    const numberInput = container.querySelector('.custom-class');
    expect(numberInput).toBeInTheDocument();
  });

  it('renders with metaPosition "left"', () => {
    const { container } = render(<NumberInput metaPosition="left" metaLabel="Hello World" />);
    const metaLabelElement = container.querySelector('.NumberInput__wrapper__metaLabel.left');
    expect(metaLabelElement).toBeInTheDocument();
  });

  it('renders with metaPosition "right"', () => {
    const { container } = render(<NumberInput metaPosition="right" metaLabel="Hello World" />);
    const metaLabelElement = container.querySelector('.NumberInput__wrapper__metaLabel.right');
    expect(metaLabelElement).toBeInTheDocument();
  });

  it('renders with default status', () => {
    const { container } = render(<NumberInput />);
    const numberInput = container.querySelector('.NumberInput');
    expect(numberInput).toHaveClass('default');
  });

  it('renders with "success" status', () => {
    const { container } = render(<NumberInput status="success" />);
    const numberInput = container.querySelector('.NumberInput');
    expect(numberInput).toHaveClass('success');
  });

  it('renders with "error" status', () => {
    const { container } = render(<NumberInput status="error" />);
    const numberInput = container.querySelector('.NumberInput');
    expect(numberInput).toHaveClass('error');
  });
});
