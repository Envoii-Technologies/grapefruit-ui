import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

import './SearchBar.scss'

export const SearchBar = ({ className, handleSearchSubmit, ...props }) =>
{
	const [term, setTerm] = useState('');

	useEffect(() => {
        if (term !== '') {
            handleSearchSubmit(term);
        }
    }, [term, handleSearchSubmit]);

	return (
		<div className={`SearchBar ${ className !== undefined ? className : "" }`}>
			<span className="SearchBar__icon">
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			</span>
			<input
                className="SearchBar__input"
                type="text"
                placeholder="Suchen..."
                onChange={(e) => setTerm(e.target.value)}
                value={term}
            />
		</div>
	)
}

SearchBar.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	handleSearchSubmit: PropTypes.func
};

SearchBar.defaultProps =
{
	className: undefined,
	handleSearchSubmit: undefined
};
