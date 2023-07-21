import React from 'react';
import PropTypes from 'prop-types';

import gear from './../../assets/envoii-gear-dark.png';

import './LoadingSpinner.scss';

export const LoadingSpinner = ({ className, ...props }) =>
{
	return (
		<div className={`LoadingSpinner ${ className !== undefined ? className : "" }`}>
			<img className='LoadingSpinner__gear' src={gear}/>
		</div>
	)
}

LoadingSpinner.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

LoadingSpinner.defaultProps =
{
	className: undefined,
};
