import React from 'react';
import PropTypes from 'prop-types';
import './LayoutWrapperHeader.scss';

export const LayoutWrapperHeader = ({ className, children, ...props }) => {
    return <div className="LayoutWrapperHeader">{children}</div>;
};

LayoutWrapperHeader.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

LayoutWrapperHeader.defaultProps = {
    className: undefined,
};
