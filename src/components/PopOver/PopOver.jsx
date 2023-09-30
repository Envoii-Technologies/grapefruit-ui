import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PopOver.scss';

export const PopOverPosition = {
    LEFT_TOP: 'left-top',
    LEFT_CENTER: 'left-center',
    LEFT_BOTTOM: 'left-bottom',
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    RIGHT_TOP: 'right-top',
    RIGHT_CENTER: 'right-center',
    RIGHT_BOTTOM: 'right-bottom',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right',
};

export const PopOver = ({
    className,
    children,
    content,
    position,
    openOnHover,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        if (openOnHover) {
            setIsVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (openOnHover) {
            setIsVisible(false);
        }
    };

    const handleClick = () => {
        if (!openOnHover) {
            setIsVisible(!isVisible);
        }
    };

    return (
        <div
            className={`PopOver ${position} ${
                openOnHover ? 'hoverable' : ''
            } ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children}
            {isVisible && (
                <div className="PopOver__content">
                    <div className="PopOver__content-inner">{content}</div>
                </div>
            )}
        </div>
    );
};

PopOver.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * The content of the trigger element.
     */
    children: PropTypes.node,

    /**
     * The content to be displayed inside the popover.
     */
    content: PropTypes.node,

    /**
     * The positioning of the popover relative to the trigger element.
     * Choose from predefined positions:
     */
    position: PropTypes.oneOf(Object.values(PopOverPosition)),

    /**
     * Determines whether the popover opens on hover (true) or on click (false).
     */
    openOnHover: PropTypes.bool,
};

PopOver.defaultProps = {
    className: undefined,
    openOnHover: false,
    position: PopOverPosition.BOTTOM_CENTER,
    content: null,
};
