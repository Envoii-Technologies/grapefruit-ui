import React from 'react';
import PropTypes from 'prop-types';
import './PageWrapper.scss'

export const PageWrapper = ({ className, children, ...props }) =>
{
	return (
		<div className={`PageWrapper ${ className !== undefined ? className : "" }`}>
			{children}
		</div>
	)
}

PageWrapper.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
    /**
     * The content of the trigger element.
     */
    children: PropTypes.node,
};

PageWrapper.defaultProps =
{
	className: undefined,
};
