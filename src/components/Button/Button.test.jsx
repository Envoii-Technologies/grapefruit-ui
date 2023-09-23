import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    // render component
    it('should render', () => {
        render(<Button />);
        const exampleButton = screen.getByRole('button', { class: /"Button"/i });
        expect(exampleButton).toBeInTheDocument();
    });

    // custom class
    it('should render with a custom class', () => {
        render(<Button className="test-class" />);
        const customClassButton = screen.getByRole('button', { class: /"Button"/i });
        expect(customClassButton).toHaveClass('test-class');
    });

    // custom label
    it('should render with custom label', () => {
        render(<Button label="Hello World!" />)
        const labelButton = screen.getByRole('button', { class: /"Button"/i });
        expect(labelButton).toContainHTML('Hello World!')
    });

    // function call on button click
    it.todo('onClick');

    // type of button
    it.todo('type');

    // size of button
    it.todo('size');

    // is button fluid?
    it('should render 100% width of parent element (iFluid)', () => {
        render(<Button label="Hello World!" isFluid={true} />)
        const fluidButton = screen.getByRole('button', { class: /"Button"/i });
        expect(fluidButton).toHaveClass('fluid');
    });

    // icon of button
    it.todo('icon');

    // is button loading?
    it('should render a loading indicator instead of text (isLoading)', () => {
        render(<Button label="Hello World!" isLoading={true} />)
        const loadingButton = screen.getByRole('button', { class: /"Button"/i });
        expect(loadingButton).toHaveClass('loading');
    });
});
