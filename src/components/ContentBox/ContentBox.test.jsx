import React from 'react';
import { render } from '@testing-library/react';
import { ContentBox } from './ContentBox';

describe('ContentBox', () => {
  it('renders with default props', () => {
    const { container } = render(<ContentBox />);
    const contentBox = container.querySelector('.ContentBox');
    const title = container.querySelector('.ContentBox__title');
    const footer = container.querySelector('.ContentBox__footer');
    expect(contentBox).toBeInTheDocument();
    expect(title).toBeNull();
    expect(footer).toBeNull();
  });

  it('renders with custom props', () => {
    const { container } = render(
      <ContentBox
        className="custom-content-box"
        dropAmount={2}
        title="Custom Title"
        footer={<div>Custom Footer</div>}
      >
        <div>Custom Content</div>
      </ContentBox>
    );
    const contentBox = container.querySelector('.custom-content-box');
    const title = container.querySelector('.ContentBox__title');
    const footer = container.querySelector('.ContentBox__footer');
    const content = container.querySelector('.ContentBox > div');
    expect(contentBox).toBeInTheDocument();
    expect(title).toHaveTextContent('Custom Title');
    expect(footer).toHaveTextContent('Custom Footer');
    expect(content).toHaveTextContent('Custom Content');
    expect(contentBox).toHaveStyle('margin-top: 2rem');
  });

  it('renders with default dropAmount', () => {
    const { container } = render(<ContentBox />);
    const contentBox = container.querySelector('.ContentBox');
    expect(contentBox).toHaveStyle('margin-top: 0rem');
  });

  it('renders with custom dropAmount', () => {
    const { container } = render(<ContentBox dropAmount={3.5} />);
    const contentBox = container.querySelector('.ContentBox');
    expect(contentBox).toHaveStyle('margin-top: 3.5rem');
  });

  it('renders with custom title', () => {
    const { container } = render(<ContentBox title="Custom Title" />);
    const contentBox = container.querySelector('.ContentBox');
    const title = container.querySelector('.ContentBox__title');
    expect(contentBox).toBeInTheDocument();
    expect(title).toHaveTextContent('Custom Title');
  });
});
