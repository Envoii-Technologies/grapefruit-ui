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
      /**
     * Specifies whether the input should receive focus on mount.
     */
    autoFocus: PropTypes.bool,
    /**
     * The label to display for the input field.
     */
    label: PropTypes.string,
    /**
     * The type of the input field (one of: 'text', 'password').
     */
    type:  PropTypes.oneOf(Object.keys(TextInputType)),
     /**
     * The status of the input field (one of: 'default', 'success', 'error').
     */
    status: PropTypes.oneOf(Object.keys(TextInputStatus)),
    /**
     * The name attribute for the input field.
     */
    name: PropTypes.string,
    /**
     * The placeholder text for the input field. If not provided, the label is used as the placeholder.
     */
    placeholder: PropTypes.string,
    /**
     * An optional label for additional metadata.
     */
    metaLabel: PropTypes.string,
    /**
     * The position of the metadata label (one of: 'left', 'right').
     * 'left' is used if no position is specified.
     */
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
