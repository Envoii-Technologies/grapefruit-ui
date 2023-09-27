import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

export const TextInputType = {
    text: 'text',
    password: 'password',
};

export const TextInputStatus = {
    default: 'default',
    success: 'success',
    error: 'error',
};

export const TextInputMetaPosition = {
    left: 'left',
    right: 'right',
};

export const TextInput = ({
    className,
    autoFocus,
    label,
    type,
    status,
    placeholder,
    metaLabel,
    metaPosition,
    name,
    ...props
}) => {
    return (
        <>
            <label className="TextInput__label" htmlFor={name}>
                {label}
            </label>
            <div
                className={`TextInput 
				${className !== undefined ? className : ''}
				${ status }
				`}
            >
                <div className="TextInput__wrapper">
                    {metaLabel && metaPosition === TextInputMetaPosition.left && (
                        <div className="NumberInput__wrapper__metaLabel left">
                            <span>{metaLabel}</span>
                        </div>
                    )}
                    <input
                        autoFocus={autoFocus}
                        className="TextInput__wrapper__metaInput"
                        type={type}
                        name={name}
                        placeholder={placeholder ? placeholder : label}
                        {...props}
                    />
                    {metaLabel && metaPosition === TextInputMetaPosition.right && (
                        <div className="NumberInput__wrapper__metaLabel right">
                            <span>{metaLabel}</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

TextInput.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    autoFocus: PropTypes.bool,
    label: PropTypes.string,
    type:  PropTypes.oneOf(Object.keys(TextInputType)),
    status: PropTypes.oneOf(Object.keys(TextInputStatus)),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    metaLabel: PropTypes.string,
    metaPosition: PropTypes.oneOf(Object.keys(TextInputMetaPosition)),
};

TextInput.defaultProps = {
    className: undefined,
    autoFocus: false,
    label: undefined,
    type: 'text',
    status: TextInputStatus.default,
    name: '',
    placeholder: '',
    metaLabel: '',
    metaPosition: TextInputMetaPosition.left,
};
