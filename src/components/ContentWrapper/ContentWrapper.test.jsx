import React from 'react';
import { render } from '@testing-library/react';
import { ContentWrapper } from './ContentWrapper';

describe('ContentWrapper', () => {
  it('renders children without wrapper when hasWrapper is false', () => {
    const { container } = render(<ContentWrapper hasWrapper={false}>Hello, World!</ContentWrapper>);
    expect(container.querySelector('.ContentWrapper')).toBeInTheDocument();
    expect(container.querySelector('.ContentWrapper__wrapper')).toBeNull();
  });

  it('renders children with wrapper when hasWrapper is true', () => {
    const { container } = render(<ContentWrapper hasWrapper={true}>Hello, World!</ContentWrapper>);
    const wrapper = container.querySelector('.ContentWrapper__wrapper');
    expect(container.querySelector('.ContentWrapper')).toBeInTheDocument();
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('padded'); // hasPadding is true by default
  });

  it('applies custom className', () => {
    const { container } = render(
      <ContentWrapper className="custom-class">Hello, World!</ContentWrapper>
    );
    const contentWrapper = container.querySelector('.ContentWrapper');
    expect(contentWrapper).toHaveClass('custom-class');
  });

  it('applies isCentered class when isCentered is true', () => {
    const { container } = render(<ContentWrapper isCentered={true}>Hello, World!</ContentWrapper>);
    const wrapper = container.querySelector('.ContentWrapper__wrapper');
    expect(wrapper).toHaveClass('centered');
  });

  it('applies isFluid class when isFluid is true', () => {
    const { container } = render(<ContentWrapper isFluid={true}>Hello, World!</ContentWrapper>);
    const wrapper = container.querySelector('.ContentWrapper__wrapper');
    expect(wrapper).toHaveClass('fluid');
  });

  it('does not apply hasPadding class when hasPadding is false', () => {
    const { container } = render(<ContentWrapper hasPadding={false}>Hello, World!</ContentWrapper>);
    const wrapper = container.querySelector('.ContentWrapper__wrapper');
    expect(wrapper).not.toHaveClass('padded');
  });
});
