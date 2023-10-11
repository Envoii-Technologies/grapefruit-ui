import React, { useState, useEffect, useRef } from 'react';
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
    const popoverRef = useRef(null);

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

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            // Add a click event listener to the document to close the popover when clicked outside
            document.addEventListener('click', handleClickOutside);
        } else {
            // Remove the click event listener when the popover is not visible
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isVisible]);

    return (
        <div
            className={`PopOver ${position} ${
                openOnHover ? 'hoverable' : ''
            } ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            ref={popoverRef} // Ref to the popover div
        >
            <div className="PopOver__trigger">{children}</div>
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
