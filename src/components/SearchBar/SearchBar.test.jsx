import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders with default props', () => {
    const { container } = render(<SearchBar />);
    const searchBar = container.querySelector('.SearchBar');
    const input = container.querySelector('.SearchBar__input');
    expect(searchBar).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Suchen...');
  });

  it('renders with custom className', () => {
    const { container } = render(<SearchBar className="custom-searchbar" />);
    const searchBar = container.querySelector('.custom-searchbar');
    expect(searchBar).toBeInTheDocument();
  });

  it('triggers handleSearchSubmit on input change', () => {
    const handleSearchSubmit = jest.fn();
    const { container } = render(<SearchBar handleSearchSubmit={handleSearchSubmit} />);
    const input = container.querySelector('.SearchBar__input');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(handleSearchSubmit).toHaveBeenCalledWith('test');
  });

  it('does not trigger handleSearchSubmit if input is empty', () => {
    const handleSearchSubmit = jest.fn();
    const { container } = render(<SearchBar handleSearchSubmit={handleSearchSubmit} />);
    const input = container.querySelector('.SearchBar__input');

    fireEvent.change(input, { target: { value: '' } });

    expect(handleSearchSubmit).not.toHaveBeenCalled();
  });
});