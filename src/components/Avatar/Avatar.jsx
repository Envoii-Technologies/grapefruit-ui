import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

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
			${size === 'small' ? 'small' : size === 'medium' ? 'medium' : 'large'}
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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
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
    size: 'medium',
    name: 'Jane Doe',
    image: undefined,
};