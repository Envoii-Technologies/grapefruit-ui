import React from 'react';
import PropTypes from 'prop-types';
import './PageContent.scss'

export const PageContent = ({ className, children, isFluid, hasWrapper, ...props }) =>
{
	return (
		<div className={`PageContent ${ className !== undefined ? className : "" }`}>
			{hasWrapper ? (
                <div className={`PageContent__wrapper ${isFluid ? 'fluid' : ''}`}>{children}</div>
            ) : (
                <>{ children }</>
            )}
		</div>
	)
}

PageContent.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

PageContent.defaultProps =
{
	className: undefined,
	hasWrapper: true,
	isFluid: false,
};
