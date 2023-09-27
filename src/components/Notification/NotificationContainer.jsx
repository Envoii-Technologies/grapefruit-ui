import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Notification } from './Notification';

import './Notification.scss';

export const NotificationContainer = ({
    className,
    maxAmount,
    addNotification,
    ...props
}) => {
    const [notificationList, setNotificationList] = useState([]);

    const createNotification = (data) => {
        if (data !== undefined) {
            if (notificationList.length >= maxAmount) {
                notificationList.shift();
            }
            setNotificationList([...notificationList, { ...data }]);
        }
    };

    useEffect(() => {
        createNotification(addNotification);
    }, [addNotification]);

    const handleDeleteNotification = (id) => {
        setNotificationList(
            notificationList.filter((notification) => notification.id !== id)
        );
    };

    return (
        <div
            className={`
			    NotificationContainer
			    ${className !== undefined ? className : ''}
		    `}
        >
            {notificationList &&
                notificationList.map((notification, i) => (
                    <Notification
                        className={"slideIn"}
                        title={notification.title}
                        key={i}
                        type={notification.type}
                        onDelete={() =>
                            handleDeleteNotification(notification.id)
                        }
                    >
                        {notification.content}
                    </Notification>
                ))}
        </div>
    );
};

NotificationContainer.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    notifications: PropTypes.array,
    maxAmount: PropTypes.number,
};

NotificationContainer.defaultProps = {
    className: undefined,
    notifications: [],
    maxAmount: 5,
};
