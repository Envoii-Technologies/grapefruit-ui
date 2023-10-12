import React from 'react';
import PropTypes from 'prop-types';
import './LayoutWrapper.scss';

export const LayoutWrapper = ({ className, children, ...props }) => {
    return <div className="LayoutWrapper">{children}</div>;
};

LayoutWrapper.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

LayoutWrapper.defaultProps = {
    className: undefined,
};
