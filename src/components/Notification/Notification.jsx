import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Notification.scss';
import {
    faXmark,
    faCircleExclamation,
    faTriangleExclamation,
    faCircleCheck,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

export const NotificationTypes = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
}

export const Notification = ({
    className,
    children,
    type,
    onDelete,
    ...props
}) => {
    console.log()
    return (
        <div
            className={`
			Notification 
			${type ? type : ''}
			${className !== undefined ? className : ''}
		`}
        >
            <div className="Notification__icon__area">
                {type === NotificationTypes.info && <FontAwesomeIcon icon={faLightbulb} />}
                {type === NotificationTypes.success && <FontAwesomeIcon icon={faCircleCheck} />}
                {type === NotificationTypes.warning && (
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                )}
                {type === NotificationTypes.error && (
                    <FontAwesomeIcon icon={faCircleExclamation} />
                )}
            </div>
            <div className="Notification__content">
                <div className="Notification__content__header">
                    <b>ABC</b>
                    <button
                        className="Notification__content__header__close"
                        onClick={onDelete}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="Notification__content__wrapper">{children}</div>
            </div>
        </div>
    );
};

Notification.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(NotificationTypes)),
    childen: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    onDelete: PropTypes.func,
};

Notification.defaultProps = {
    className: undefined,
    color: undefined,
    type: NotificationTypes.info,
    childen: undefined,
    onDelete: undefined,
};
