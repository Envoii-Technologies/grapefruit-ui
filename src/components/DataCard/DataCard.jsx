import React from 'react';
import PropTypes from 'prop-types';
import './DataCard.scss'

export const DataCard = ({ className, ...props }) =>
{
	return (
		<div className={`DataCard ${ className !== undefined ? className : "" }`}>
			DataCard Initiated!
		</div>
	)
}

DataCard.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

DataCard.defaultProps =
{
	className: undefined,
};
