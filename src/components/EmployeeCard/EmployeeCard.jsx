import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from './../Avatar/';

import './EmployeeCard.scss';

export const EmployeeCard = ({
    className,
    name,
    image,
    role,
    hasAnimation,
    isDisabled,
    isAdmin,
    ...props
}) => {
    return (
        <div
            className={`
			EmployeeCard ${className !== undefined ? className : ''}
			${hasAnimation ? 'animated' : ''}
			${isDisabled ? 'disabled' : ''}
		`}
        >
            <div className="EmployeeCard__wrapper">
                {isAdmin && (
                    <div className="EmployeeCard__wrapper__badge">Admin</div>
                )}
                <Avatar size="large" image={image} name={name} />
                <div className="EmployeeCard__wrapper__info">
                    <p className="EmployeeCard__wrapper__info__name">{name}</p>
                    {role && (
                        <p className="EmployeeCard__wrapper__info__role">
                            {role}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

EmployeeCard.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Path to image file
     */
    image: PropTypes.string,
    /**
     * Name shown on card and Initials shown in Avatar
     */
    name: PropTypes.string,
    /**
     * If a role is set, it will be shown below the Full name of the user
     */
    role: PropTypes.string,
    /**
     * Does the card animate on hover?
     */
    hasAnimation: PropTypes.bool,
    /**
     * Is the card disabled?
     */
    isDisabled: PropTypes.bool,
    /**
     * Is the content-account an admin?
     */
    isAdmin: PropTypes.bool,
};

EmployeeCard.defaultProps = {
    className: undefined,
    title: 'Default',
    image: undefined,
    name: 'Max Mustermann',
    role: undefined,
    hasAnimation: true,
    isDisabled: false,
    isAdmin: false,
};
