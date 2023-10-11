import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss'

export const Grid = ({ className, children, style, ...props }) =>
{
	return (
		<div className={`Grid ${ className !== undefined ? className : "" }`} style={style}>
			{children}
		</div>
	)
}

Grid.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

Grid.defaultProps =
{
	className: undefined,
};
