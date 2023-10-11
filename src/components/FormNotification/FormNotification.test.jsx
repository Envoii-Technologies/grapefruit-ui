import React from 'react';
import { render } from '@testing-library/react';
import { FormNotification } from './FormNotification';

describe('FormNotification', () => {
  it('renders with default props', () => {
    const { container } = render(<FormNotification />);
    const formNotification = container.querySelector('.FormNotification');
    expect(formNotification).toBeInTheDocument();
    expect(formNotification).toHaveClass('error');
    expect(formNotification).toHaveTextContent('[DEFAULT MESSAGE]');
  });

  it('renders with custom props', () => {
    const { container } = render(
      <FormNotification
        className="custom-notification"
        type="success"
        message="Custom Message"
      />
    );
    const formNotification = container.querySelector('.custom-notification');
    expect(formNotification).toBeInTheDocument();
    expect(formNotification).toHaveClass('success');
    expect(formNotification).toHaveTextContent('Custom Message');
  });

  it('renders different icons based on type', () => {
    const { container } = render(<FormNotification type="success" />);
    const successIcon = container.querySelector('.FormNotification__wrapper__icon.success');
    expect(successIcon).toBeInTheDocument();
    const warningIcon = render(<FormNotification type="warning" />).container.querySelector('.FormNotification__wrapper__icon.warning');
    expect(warningIcon).toBeInTheDocument();
    const errorIcon = render(<FormNotification type="error" />).container.querySelector('.FormNotification__wrapper__icon.error');
    expect(errorIcon).toBeInTheDocument();
  });

  it('handles custom class names', () => {
    const { container } = render(<FormNotification className="custom-class" />);
    const formNotification = container.querySelector('.custom-class');
    expect(formNotification).toBeInTheDocument();
  });
});
