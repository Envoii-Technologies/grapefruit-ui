import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import './PopOver.scss';

export const PopOverPosition = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
};

export const PopOver = ({
    className,
    children,
    position,
    options,
    text,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAction = (action, e) => {
        setIsOpen(false);

        action(e);
    };

    return (
        <div className={`PopOver ${className !== undefined ? className : ''}`}>
            <span
                className="PopOver__trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                {children}
            </span>
            <div
                className={`PopOver__content ${
                    isOpen ? 'open' : 'closed'
                } ${position}`}
            >
                {options
                    ? options.map((option, i) => (
                          <Button
                              key={i}
                              disabled={option.disabled || false}
                              type={option.type || 'primary'}
                              label={option.label}
                              onClick={(e) => handleAction(option.action, e)}
                          />
                      ))
                    : text
				}
            </div>
        </div>
    );
};

PopOver.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    position: PropTypes.oneOf(Object.keys(PopOverPosition)),
    options: PropTypes.array,
    text: PropTypes.string,
};

PopOver.defaultProps = {
    className: undefined,
    children: null,
    position: PopOverPosition.bottom,
    options: undefined,
    text: 'Hello World',
};
