import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with default props', () => {
    const { container } = render(<Avatar />);
    const avatar = container.querySelector('.Avatar');
    const name = container.querySelector('.Avatar__name');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('medium');
    expect(name).toHaveTextContent('JD'); // Initials from default name "Jane Doe"
  });

  it('renders with custom props', () => {
    const { container } = render(
      <Avatar className="custom-avatar" size="large" name="John Smith"  />
    );
    const avatar = container.querySelector('.custom-avatar');
    const name = container.querySelector('.Avatar__name');
    const image = container.querySelector('.Avatar__image');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('large');
    expect(name).toHaveTextContent('JS'); // Initials from custom name "John Smith"
  });

  it('renders with image', () => {
    const { container } = render(
      <Avatar className="custom-avatar" size="large" name="John Smith" image="image-url" />
    );
    const avatar = container.querySelector('.custom-avatar');
    const name = container.querySelector('.Avatar__name');
    const image = container.querySelector('.Avatar__image');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('large');
    expect(image).toHaveAttribute('src', 'image-url');
  });

  it('renders without image', () => {
    const { container } = render(<Avatar name="Alice Johnson" />);
    const avatar = container.querySelector('.Avatar');
    const name = container.querySelector('.Avatar__name');
    const image = container.querySelector('.Avatar__image');
    expect(avatar).toBeInTheDocument();
    expect(image).toBeNull();
    expect(name).toHaveTextContent('AJ'); // Initials from custom name "Alice Johnson"
  });

  it('renders with default size (medium)', () => {
    const { container } = render(<Avatar />);
    const avatar = container.querySelector('.Avatar');
    expect(avatar).toHaveClass('medium');
  });

  it('renders with small size', () => {
    const { container } = render(<Avatar size="small" />);
    const avatar = container.querySelector('.Avatar');
    expect(avatar).toHaveClass('small');
  });

  it('renders with medium size', () => {
    const { container } = render(<Avatar size="medium" />);
    const avatar = container.querySelector('.Avatar');
    expect(avatar).toHaveClass('medium');
  });

  it('renders with large size', () => {
    const { container } = render(<Avatar size="large" />);
    const avatar = container.querySelector('.Avatar');
    expect(avatar).toHaveClass('large');
  });

  it('renders with custom class and large size', () => {
    const { container } = render(<Avatar className="custom-avatar" size="large" />);
    const avatar = container.querySelector('.custom-avatar');
    expect(avatar).toHaveClass('large');
  });

  it('renders with default name (Jane Doe)', () => {
    const { container } = render(<Avatar />);
    const name = container.querySelector('.Avatar__name');
    expect(name).toHaveTextContent('JD'); // Initials from default name "Jane Doe"
  });

  it('renders with a custom name', () => {
    const { container } = render(<Avatar name="John Smith" />);
    const name = container.querySelector('.Avatar__name');
    expect(name).toHaveTextContent('JS'); // Initials from custom name "John Smith"
  });

  it('renders with a custom long name', () => {
    const { container } = render(<Avatar name="Alice Johnson Smith" />);
    const name = container.querySelector('.Avatar__name');
    expect(name).toHaveTextContent('AJS'); // Initials from custom name "Alice Johnson Smith"
  });

  it('renders with an empty name', () => {
    const { container } = render(<Avatar name="" />);
    const name = container.querySelector('.Avatar__name');
    expect(name).toHaveTextContent(''); // No initials for an empty name
  });
});
