import React from 'react';
import { render } from '@testing-library/react';
import { LoadingIndicator } from './LoadingIndicator';

describe('LoadingIndicator', () => {
  it('renders with default props', () => {
    const { container } = render(<LoadingIndicator />);
    const loadingIndicator = container.querySelector('.LoadingIndicator');
	const spinner = container.querySelector('.LoadingIndicator .LoadingIndicator__spinner');
    expect(loadingIndicator).toBeInTheDocument();
    expect(loadingIndicator).not.toHaveClass('fluid');
    expect(loadingIndicator).not.toHaveClass('full');
    expect(spinner).toHaveStyle('color: black');
  });

  it('renders with custom props', () => {
    const { container } = render(
      <LoadingIndicator
        className="custom-loading-indicator"
        fluid={true}
        full={true}
        color="blue"
      />
    );
    const loadingIndicator = container.querySelector('.custom-loading-indicator');
	const spinner = container.querySelector('.custom-loading-indicator .LoadingIndicator__spinner');
    expect(loadingIndicator).toBeInTheDocument();
    expect(loadingIndicator).toHaveClass('fluid');
    expect(loadingIndicator).toHaveClass('full');
    expect(spinner).toHaveStyle('color: blue');
  });

  it('handles custom class names', () => {
    const { container } = render(<LoadingIndicator className="custom-class" />);
    const loadingIndicator = container.querySelector('.custom-class');
    expect(loadingIndicator).toBeInTheDocument();
  });
});
