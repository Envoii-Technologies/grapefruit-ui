import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

export const TextAreaStatus = {
    default: 'default',
    success: 'success',
    error: 'error',
};

export const TextAreaMetaPositions = {
    left: 'left',
    right: 'right',
};

export const TextArea = ({
    className,
    autoFocus,
    label,
    status,
    placeholder,
    metaLabel,
    metaPosition,
    name,
    isResizable,
    ...props
}) => {
    return (
        <>
            <label className="TextArea__label" htmlFor={name}>
                {label}
            </label>
            <div
                className={`
				TextArea
				${className !== undefined ? className : ''}
				${ status }
			`}
            >
                <div className="TextArea__wrapper">
                    {metaLabel && metaPosition === TextAreaMetaPositions.left && (
                        <div className="TextArea__wrapper__metaLabel left">
                            <span>{metaLabel}</span>
                        </div>
                    )}
                    <textarea
                        autoFocus={autoFocus}
                        className={`TextArea__wrapper__metaInput ${ isResizable ? 'resizable' : 'unresizable'}`}
                        name={name}
                        id=""
                        rows="4"
                        placeholder={placeholder}
                        {...props}
                    />
					{metaLabel && metaPosition === TextAreaMetaPositions.right && (
                        <div className="TextArea__wrapper__metaLabel right">
                            <span>{metaLabel}</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

TextArea.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
	autoFocus: PropTypes.bool,
    label: PropTypes.string,
    status: PropTypes.oneOf(Object.keys(TextAreaStatus)),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    metaLabel: PropTypes.string,
    metaPosition: PropTypes.oneOf(Object.keys(TextAreaMetaPositions)),
    isResizable: PropTypes.bool,
};

TextArea.defaultProps = {
    className: undefined,
	autoFocus: false,
    label: undefined,
    status: TextAreaStatus.default,
    placeholder: '',
    metaLabel: '',
    name: '',
    metaPosition: TextAreaMetaPositions.left,
    isResizable: false
};
