import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss'
import { Column } from './Column';

export const Row = ({ className, children, style, maxColumns, ...props }) =>
{
	const arrayChildren = Children.toArray(children);
	
	return (
		<div className={`Row ${ className !== undefined ? className : "" }`} style={style}>
			{Children.map(arrayChildren, (child, i) =>
			{
				return(
				i === maxColumns ?
				(
					<>
						<div className="Column breaker"></div>
						<Column {...child.props} />
					</>
				)
				:
				(
					<Column {...child.props}/>
				)
				)
			})}
		</div>
	)
}

Row.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	maxColumns: PropTypes.number,
};

Row.defaultProps =
{
	className: undefined,
	maxColumns: 4,
};
