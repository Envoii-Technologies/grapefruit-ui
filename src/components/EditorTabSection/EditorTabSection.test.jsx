import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditorTabSection } from './EditorTabSection';

describe('EditorTabSection', () => {
  it('renders with default props', () => {
    const { container } = render(<EditorTabSection />);
    const tabSection = container.querySelector('.EditorTabSection');
    expect(tabSection).toBeInTheDocument();
    const tabMenuItems = container.querySelectorAll('.EditorTabSectionMenuItem');
    expect(tabMenuItems.length).toBe(3); // Default tabItems length
    expect(tabMenuItems[0]).toHaveTextContent('Schritte');
    expect(tabMenuItems[1]).toHaveTextContent('Informationen');
    expect(tabMenuItems[2]).toHaveTextContent('Medien');
  });

  it('renders with custom props', () => {
    const customTabItems = [
      {
        title: 'Custom Tab 1',
        content: <p>Custom Content 1</p>,
      },
      {
        title: 'Custom Tab 2',
        content: <p>Custom Content 2</p>,
      },
    ];
    const { container } = render(
      <EditorTabSection
        className="custom-editor-tab"
        tabItems={customTabItems}
      />
    );
    const tabSection = container.querySelector('.custom-editor-tab');
    expect(tabSection).toBeInTheDocument();
    const tabMenuItems = container.querySelectorAll('.EditorTabSectionMenuItem');
    expect(tabMenuItems.length).toBe(2);
    expect(tabMenuItems[0]).toHaveTextContent('Custom Tab 1');
    expect(tabMenuItems[1]).toHaveTextContent('Custom Tab 2');
    const content = container.querySelector('.EditorTabSectionContent');
    expect(content).toHaveTextContent('Custom Content 1');
  });

  it('activates tabs on click', () => {
    const { container } = render(<EditorTabSection />);
    const tabMenuItems = container.querySelectorAll('.EditorTabSectionMenuItem');
    const content = container.querySelector('.EditorTabSectionContent');

    fireEvent.click(tabMenuItems[1]); // Click on "Informationen" tab

    expect(tabMenuItems[0]).not.toHaveClass('active');
    expect(tabMenuItems[1]).toHaveClass('active');
    expect(tabMenuItems[2]).not.toHaveClass('active');
    expect(content).toHaveTextContent('Second Content');

    fireEvent.click(tabMenuItems[2]); // Click on "Medien" tab

    expect(tabMenuItems[0]).not.toHaveClass('active');
    expect(tabMenuItems[1]).not.toHaveClass('active');
    expect(tabMenuItems[2]).toHaveClass('active');
    expect(content).toHaveTextContent('Third Content');
  });
});
