import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

export const Button = ({ className, label, size, onClick, ...props }) =>
{
	return (
		<button 
			className={`
				Button ${ className !== undefined ? className : "" }
				size-${size}
			`}
			onClick={onClick}
		>
			{ label }
		</button>
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
	size: PropTypes.oneOf(["small", "medium", "large"]),
	/**
	 * Function to be called when button click event is fired
	 */
	onClick: PropTypes.func
};

Button.defaultProps =
{
	className: undefined,
	label: "Default",
	size: "medium"
};
