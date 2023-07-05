import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss'

export const Card = ({
	hasPadding,
	className,
	isFluid,
	shadow,
	hasAnimation,
	children,
	isDisabled,
	...props
}) =>
{
	return (
		<div className={`
			Card ${ className !== undefined ? className : "" }
			${hasAnimation ? 'animated' : ''}
			${ isFluid ? 'fluid' : '' }
			${isDisabled ? 'disabled' : ''}
		`}>
			<div className={`
				Card__wrapper
				${ className !== undefined ? `${className}__wrapper` : "" }
				${ hasPadding ? 'padding' : ''}
				${ `shadow-${shadow}`}
			`}>
				{ children }
			</div>
		</div>
	)
}

Card.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
	 * Children component of Card
	 */
	children: PropTypes.element,
	/**
	 * Is component 100% width of parent?
	 */
	isFluid: PropTypes.bool,
	/**
	 * Hardness of shadow
	 */
	shadow: PropTypes.oneOf(["off", "light", "medium", "hard"]),
	/**
	 * Does the Card have a default padding?
	 */
	hasPadding: PropTypes.bool,
	/**
     * Does the card animate on hover?
     */
	hasAnimation: PropTypes.bool,
	/**
     * Is the card disabled?
     */
	isDisabled: PropTypes.bool,	
};

Card.defaultProps =
{
	className: undefined,
	children: <p>Card</p>,
	isFluid: false,
	hasPadding: true,
	shadow: "light",
	hasAnimation: true,
	isDisabled: false,
};
