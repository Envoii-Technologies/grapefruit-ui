import React from 'react';
import PropTypes from 'prop-types';

import './NumberInput.scss';

export const NumberInputStatus = {
    default: 'default',
    success: 'success',
    error: 'error',
};

export const NumberInputMetaPositions = {
    left: 'left',
    right: 'right',
};

export const NumberInput = ({
    className,
    autoFocus,
    label,
    status,
    placeholder,
    metaLabel,
    metaPosition,
    name,
    ...props
}) => {
    return (
        <>
            <label className="NumberInput__label" htmlFor={name}>
                {label}
            </label>
            <div
                className={`NumberInput
				${className !== undefined ? className : ''}
				${status}
				`}
            >
                <div className="NumberInput__wrapper">
                    {metaLabel &&
                        metaPosition === NumberInputMetaPositions.left && (
                            <div className="NumberInput__wrapper__metaLabel left">
                                <span>{metaLabel}</span>
                            </div>
                        )}
                    <input
                        autoFocus={autoFocus}
                        className="NumberInput__wrapper__metaInput"
                        type="number"
                        name={name}
                        placeholder={placeholder ? placeholder : label}
                        {...props}
                    />
                    {metaLabel &&
                        metaPosition === NumberInputMetaPositions.right && (
                            <div className="NumberInput__wrapper__metaLabel right">
                                <span>{metaLabel}</span>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
};

NumberInput.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    autoFocus: PropTypes.bool,
    label: PropTypes.string,
    status: PropTypes.oneOf(Object.keys(NumberInputStatus)),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    metaLabel: PropTypes.string,
    metaPosition: PropTypes.oneOf(Object.keys(NumberInputMetaPositions)),
};

NumberInput.defaultProps = {
    className: undefined,
    autoFocus: false,
    label: undefined,
    status: NumberInputStatus.default,
    name: '',
    placeholder: '',
    metaLabel: '',
    metaPosition: NumberInputMetaPositions.left,
};
