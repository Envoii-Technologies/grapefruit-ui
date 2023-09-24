import React from 'react';
import PropTypes from 'prop-types';
import './ContentWrapper.scss'

export const ContentWrapper = ({ className, children, isFluid, hasWrapper, ...props }) =>
{
	return (
		<div className={`ContentWrapper ${ className !== undefined ? className : "" }`}>
			{hasWrapper ? (
                <div className={`ContentWrapper__wrapper ${isFluid ? 'fluid' : ''}`}>{children}</div>
            ) : (
                <>{ children }</>
            )}
		</div>
	)
}

ContentWrapper.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	hasWrapper: PropTypes.bool,
	isFluid: PropTypes.bool,
};

ContentWrapper.defaultProps =
{
	className: undefined,
	hasWrapper: true,
	isFluid: false,
};
