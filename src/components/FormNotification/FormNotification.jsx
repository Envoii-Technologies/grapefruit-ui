import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleExclamation,
   faTriangleExclamation,
   faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

import './FormNotification.scss'

export const FormNotification = ({ className, type, message, ...props }) =>
{
	return (
		<div className={`
			FormNotification
			${ className !== undefined ? className : "" }
			${type}
		`}>
			<div className="FormNotification__wrapper">
			<div className={`FormNotification__wrapper__icon ${type}`}>
					{
						type === "success" && <FontAwesomeIcon icon={faCircleCheck} />
					}
					{
						type === "warning" && <FontAwesomeIcon icon={faTriangleExclamation} />
					}
					{
						type === "error" && <FontAwesomeIcon icon={faCircleExclamation} />
					}
				</div>
				<p className="FormNotification__wrapper__message">
					{message}
				</p>
			</div>
		</div>
	)
}

FormNotification.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
	 * Type of notification
	 */
	type: PropTypes.oneOf(["success", "warning", "error"]),
	/**
	 * Message to be shown
	 */
    message: PropTypes.string,
};

FormNotification.defaultProps =
{
	className: undefined,
	type: "error",
    message: "[DEFAULT MESSAGE]"
};
