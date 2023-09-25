import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

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
                    {metaLabel && metaPosition === 'left' && (
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
                    {metaLabel && metaPosition === 'right' && (
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
    type: PropTypes.oneOf(['text', 'password']),
    status: PropTypes.oneOf(['default', 'success', 'error']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    metaLabel: PropTypes.string,
    metaPosition: PropTypes.oneOf(['left', 'right']),
};

TextInput.defaultProps = {
    className: undefined,
    autoFocus: false,
    label: undefined,
    type: 'text',
    status: 'default',
    name: '',
    placeholder: '',
    metaLabel: '',
    metaPosition: 'left',
};
