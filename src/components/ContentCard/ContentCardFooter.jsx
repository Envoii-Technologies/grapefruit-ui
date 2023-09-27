import React from 'react';
import PropTypes from 'prop-types';
import './ContentCard.scss'

export const ContentCardFooter = ({ className, children, ...props }) =>
{
	return (
		<div className={`ContentCardFooter ${ className !== undefined ? className : "" }`}>
			{children}
		</div>
	)
}
