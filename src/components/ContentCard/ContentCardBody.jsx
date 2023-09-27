import React from 'react';
import PropTypes from 'prop-types';
import './ContentCard.scss'

export const ContentCardBody = ({ className, children, ...props }) =>
{
	return (
		<div className={`ContentCardBody ${ className !== undefined ? className : "" }`}>
			<div className="ContentCardBody__wrapper">
				{children}
			</div>
		</div>
	)
}
