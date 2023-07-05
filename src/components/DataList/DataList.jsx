import React from 'react';
import PropTypes from 'prop-types';

import { DataCard } from './../DataCard/';

import './DataList.scss'

export const DataList = ({ className, ...props }) =>
{
	return (
		<div className={`DataList ${ className !== undefined ? className : "" }`}>
		{
			[0, 1, 2].map((item, i) => (
				<DataCard isFluid></DataCard>
			))
		}
		</div>
	)
}

DataList.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

DataList.defaultProps =
{
	className: undefined,
};
