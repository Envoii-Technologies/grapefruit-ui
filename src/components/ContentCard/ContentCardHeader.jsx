import React from 'react';
import PropTypes from 'prop-types';
import './ContentCard.scss'

export const ContentCardHeader = ({ className, children, ...props }) =>
{
	return (
		<div className={`ContentCardHeader ${ className !== undefined ? className : "" }`}>
			{children}
		</div>
	)
}
