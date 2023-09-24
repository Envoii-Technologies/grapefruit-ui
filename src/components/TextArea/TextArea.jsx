import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

export const TextArea = ({
    className,
    autoFocus,
    label,
    status,
    placeholder,
    metaLabel,
    metaPosition,
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
				${status ? status : ''}
			`}
            >
                <div className="TextArea__wrapper">
                    {metaLabel && metaPosition === 'left' && (
                        <div className="TextArea__wrapper__metaLabel">
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
                    ></textarea>
					{metaLabel && metaPosition === 'right' && (
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
    status: PropTypes.oneOf(["default", 'success', 'error']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    metaLabel: PropTypes.string,
    metaPosition: PropTypes.oneOf(['left', 'right']),
    isResizable: PropTypes.bool
};

TextArea.defaultProps = {
    className: undefined,
	autoFocus: false,
    label: undefined,
    status: "default",
    placeholder: '',
    metaLabel: '',
    name: '',
    metaPosition: 'left',
    isResizable: false
};
