import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

export const AvatarSizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
};

export const Avatar = ({ className, name, image, size, ...props }) => {
    const getFirstLetters = (str) => {
        const firstLetters = str
            .split(' ')
            .map((word) => word[0])
            .join('');

        return firstLetters.toUpperCase();
    };

    return (
        <div
            className={`
			Avatar ${className !== undefined ? className : ''}
			${size ===  AvatarSizes.small ? 'small' : size === AvatarSizes.medium ? 'medium' : 'large'}
			${image !== undefined ? 'with-image' : ''}
			`}
            {...props}
        >
            {image ? (
                <>
                    <img
                        className="Avatar__image"
                        src={image}
                        alt="user-image"
                        style={{ display: 'flex' }}
                    />
                </>
            ) : (
                <h1 className="Avatar__name">{getFirstLetters(name)}</h1>
            )}
        </div>
    );
};

Avatar.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Size of avatar image
     */
    size: PropTypes.oneOf(Object.keys(AvatarSizes)),
    /**
     * Initials shown in Avatar
     */
    name: PropTypes.string,
    /**
     * Path to image file
     */
    image: PropTypes.string,
};

Avatar.defaultProps = {
    className: undefined,
    size: AvatarSizes.medium,
    name: 'Jane Doe',
    image: undefined,
};
