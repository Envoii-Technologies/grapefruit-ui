import React from 'react';
import PropTypes from 'prop-types';
import './LayoutWrapperMain.scss';

export const LayoutWrapperMain = ({ className, children, ...props }) => {
    return <main className="LayoutWrapperMain">{children}</main>;
};

LayoutWrapperMain.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

LayoutWrapperMain.defaultProps = {
    className: undefined,
};
