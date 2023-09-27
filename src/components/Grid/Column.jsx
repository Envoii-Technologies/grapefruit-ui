import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss'

export const Column = ({ className, children, style, width, fixedWidth, ...props }) =>
{
	return (
		<div className={`
			Column ${ className !== undefined ? className : "" }
			${ fixedWidth !== undefined ? `fixedWidth` : `width__${ width }`}
			`} 
			style={{...style, flexBasis: fixedWidth}}
		>
			{ children }
		</div>
	)
}

Column.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	width: PropTypes.oneOf([10, 15, 20, 25, 50]),
	fixedWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.undefined])
};

Column.defaultProps =
{
	className: undefined,
	width: 10,
	fixedWidth: undefined
};
