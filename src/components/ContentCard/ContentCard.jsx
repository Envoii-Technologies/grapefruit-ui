import React from 'react';
import PropTypes from 'prop-types';

export const ContentCard = ({ className, children, ...props }) =>
{
	return (
		<div className={`ContentCard ${ className !== undefined ? className : "" }`}>
			{children}
		</div>
	)
}

ContentCard.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	childen: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
};

ContentCard.defaultProps =
{
	className: undefined,
	children: undefined,
};
