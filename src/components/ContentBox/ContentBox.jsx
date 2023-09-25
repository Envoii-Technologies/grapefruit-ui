import React from 'react';
import PropTypes from 'prop-types';

import './ContentBox.scss';

export const ContentBox = ({
    className,
    children,
    dropAmount,
    title,
    footer,
    ...props
}) => {
    return (
        <>
            <div
                style={{ marginTop: `${dropAmount}rem` }}
                className={`ContentBox ${
                    className !== undefined ? className : ''
                }`}
            >
                {title && (
                    <>
                        <header className="ContentBox__title">{title}</header>
                    </>
                )}
                <>{children}</>
                {footer && <footer className="ContentBox__footer">{footer}</footer>}
            </div>
        </>
    );
};

ContentBox.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    dropAmount: PropTypes.number,
    title: PropTypes.string,
    footer: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    childen: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
};

ContentBox.defaultProps = {
    className: undefined,
    dropAmount: 0,
    title: undefined,
    footer: undefined,
    children: undefined
};
