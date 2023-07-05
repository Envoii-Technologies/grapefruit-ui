import React from 'react';
import PropTypes from 'prop-types';

import './PageWrapper.scss';

export const PageWrapper = ({ className, children, ...props }) => {
    return (
        <div
            className={`PageWrapper ${
                className !== undefined ? className : ''
            }`}
        >
            { children }
        </div>
    );
};

PageWrapper.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * content of wrapper component
     */
    children: PropTypes.element,
};

PageWrapper.defaultProps = {
    className: undefined,
    children: "Hello World",
};
