import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Button.scss';

export const ButtonSizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
};

export const ButtonTypes = {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    error: 'error',
    transparent: 'transparent',
};

export const Button = ({
    className,
    label,
    onClick,
    type,
    size,
    isFluid,
    icon,
    isLoading,
    ...props
}) => {
    return (
        <>
            <button
                className={`Button 
				${className !== undefined ? className : ''}
				${isFluid ? 'fluid' : ''} 
				${type} 
				${isLoading ? 'loading' : ''}`}
                type="button"
                onClick={onClick}
                {...props}
            >
                <div
                    className={`Button__wrapper ${size} ${
                        label ? 'withLabel' : ''
                    }`}
                >
                    {!isLoading ? (
                        <>
                            {icon && (
                                <div className="Button__icon__wrapper">
                                    <FontAwesomeIcon
                                        className="Button__icon"
                                        icon={icon}
                                    />
                                </div>
                            )}
                            {label && (
                                <span className="Button__label">{label}</span>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={`Button__spinner`}></div>
                        </>
                    )}
                </div>
            </button>
        </>
    );
};

Button.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Label of Component
     */
    label: PropTypes.string,
    /**
     * Function to be called when click event is fired
     */
    onClick: PropTypes.func,
    /**
     * Type of Component
     */
    type: PropTypes.oneOf(Object.keys(ButtonTypes)),
    /**
     * Size of Component
     */
    size: PropTypes.oneOf(Object.keys(ButtonSizes)),
    /**
     * Is Component fluid?
     */
    isFluid: PropTypes.bool,
    /**
     * Icon for Component
     */
    icon: PropTypes.any,
    /**
     * Is Component showing loading state?
     */
    isLoading: PropTypes.bool,
};

Button.defaultProps = {
    className: undefined,
    label: '',
    onClick: undefined,
    type: ButtonTypes.default,
    size: ButtonSizes.medium,
    isFluid: true,
    icon: undefined,
    isLoading: false,
};
