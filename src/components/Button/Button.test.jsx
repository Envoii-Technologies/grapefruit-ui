import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

describe('Button', () => {
    it('renders with default props', () => {
      const { container } = render(<Button />);
      const button = container.querySelector('.Button');
      const label = container.querySelector('.Button__label');
      const wrapper = container.querySelector('.Button__wrapper');
      const icon = container.querySelector('.Button__icon');
      expect(button).toBeInTheDocument();
      expect(wrapper).toHaveClass('medium');
      expect(icon).toBeNull();
    });

    it('renders with custom props', () => {
        const onClick = jest.fn();
        const { container } = render(
          <Button
            className="custom-button"
            label="Custom Label"
            type="primary"
            size="large"
            isFluid={false}
            icon={faCircleQuestion}
            onClick={onClick}
          />
        );
        const button = container.querySelector('.custom-button');
        const label = container.querySelector('.Button__label');
        const icon = container.querySelector('.Button__icon');
        const wrapper = container.querySelector('.Button__wrapper');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('primary');
        expect(wrapper).toHaveClass('large');
        expect(label).toHaveTextContent('Custom Label');
        expect(icon).toBeInTheDocument();
      });

      it('triggers onClick when button is clicked', () => {
        const onClick = jest.fn();
        const { container } = render(<Button label="Click Me" onClick={onClick} />);
        const button = container.querySelector('.Button');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it('renders loading state when isLoading is true', () => {
        const { container } = render(<Button label="Loading" isLoading={true} />);
        const button = container.querySelector('.Button');
        const spinner = container.querySelector('.Button__spinner');
        expect(button).toHaveClass('loading');
        expect(spinner).toBeInTheDocument();
      });

      it('renders with default type (default)', () => {
        const { container } = render(<Button />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('default');
      });
    
      it('renders with primary type', () => {
        const { container } = render(<Button type="primary" />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('primary');
      });
    
      it('renders with secondary type', () => {
        const { container } = render(<Button type="secondary" />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('secondary');
      });
    
      it('renders with success type', () => {
        const { container } = render(<Button type="success" />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('success');
      });
    
      it('renders with warning type', () => {
        const { container } = render(<Button type="warning" />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('warning');
      });
    
      it('renders with error type', () => {
        const { container } = render(<Button type="error" />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('error');
      });
    
      it('renders with transparent type', () => {
        const { container } = render(<Button type="transparent" />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('transparent');
      });
    
      it('renders with custom class and type', () => {
        const { container } = render(<Button className="custom-button" type="secondary" />);
        const button = container.querySelector('.custom-button');
        expect(button).toHaveClass('secondary');
      });

      it('renders with different sizes', () => {
        const { container } = render(
          <>
            <Button size="small" />
            <Button size="medium" />
            <Button size="large" />
          </>
        );
    
        const smallButton = container.querySelector('.Button .Button__wrapper.small');
        const mediumButton = container.querySelector('.Button .Button__wrapper.medium');
        const largeButton = container.querySelector('.Button .Button__wrapper.large');
    
        expect(smallButton).toBeInTheDocument();
        expect(mediumButton).toBeInTheDocument();
        expect(largeButton).toBeInTheDocument();
      });

      it('renders as fluid', () => {
        const { container } = render(<Button isFluid={true} />);
        const button = container.querySelector('.Button');
        expect(button).toHaveClass('fluid');
      });
    
      it('renders without fluid', () => {
        const { container } = render(<Button isFluid={false} />);
        const button = container.querySelector('.Button');
        expect(button).not.toHaveClass('fluid');
      });

      it('renders with label', () => {
        const { container } = render(<Button label="Label" />);
        const button = container.querySelector('.Button');
        const label = container.querySelector('.Button__label');
        expect(button).toBeInTheDocument();
        expect(label).toHaveTextContent('Label');
      });
});

// import { render, screen } from '@testing-library/react';
// import { Button } from './Button';

// describe('Button', () => {
//     // render component
//     it('should render', () => {
//         render(<Button />);
//         const exampleButton = screen.getByRole('button', { class: /"Button"/i });
//         expect(exampleButton).toBeInTheDocument();
//     });

//     // custom class
//     it('should render with a custom class', () => {
//         render(<Button className="test-class" />);
//         const customClassButton = screen.getByRole('button', { class: /"Button"/i });
//         expect(customClassButton).toHaveClass('test-class');
//     });

//     // custom label
//     it('should render with custom label', () => {
//         render(<Button label="Hello World!" />)
//         const labelButton = screen.getByRole('button', { class: /"Button"/i });
//         expect(labelButton).toContainHTML('Hello World!')
//     });

//     // function call on button click
//     it.todo('onClick');

//     // type of button
//     it.todo('type');

//     // size of button
//     it.todo('size');

//     // is button fluid?
//     it('should render 100% width of parent element (iFluid)', () => {
//         render(<Button label="Hello World!" isFluid={true} />)
//         const fluidButton = screen.getByRole('button', { class: /"Button"/i });
//         expect(fluidButton).toHaveClass('fluid');
//     });

//     // icon of button
//     it.todo('icon');

//     // is button loading?
//     it('should render a loading indicator instead of text (isLoading)', () => {
//         render(<Button label="Hello World!" isLoading={true} />)
//         const loadingButton = screen.getByRole('button', { class: /"Button"/i });
//         expect(loadingButton).toHaveClass('loading');
//     });
// });
