import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss'

export const Row = ({ className, children, style, ...props }) =>
{
	return (
		<div className={`Row ${ className !== undefined ? className : "" }`} style={style}>
			{ children }
		</div>
	)
}

Row.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

Row.defaultProps =
{
	className: undefined,
};
