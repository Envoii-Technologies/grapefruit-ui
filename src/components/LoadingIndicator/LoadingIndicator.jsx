import React from 'react';
import PropTypes from 'prop-types';
import './LoadingIndicator.scss'

export const LoadingIndicator = ({ className, ...props }) =>
{
	return (
		<div className={`LoadingIndicator ${ className !== undefined ? className : "" }`}>
			LoadingIndicator Initiated!
		</div>
	)
}

LoadingIndicator.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

LoadingIndicator.defaultProps =
{
	className: undefined,
};
