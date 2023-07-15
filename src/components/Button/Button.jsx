import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

export const Button = ({ className, label, size, ...props }) =>
{
	return (
		<div className={`
			Button ${ className !== undefined ? className : "" }
			size-${size}
		`}>
			{ label }
		</div>
	)
}

Button.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
	 * Label of the Component
	 */
	label: PropTypes.string,
	/**
	 * Size of the component
	 */
	label: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps =
{
	className: undefined,
	label: "Default",
	size: "medium"
};
