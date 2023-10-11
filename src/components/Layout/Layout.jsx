import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

export const Layout = ({ className, children, ...props }) => {
    return (
        <div className="Layout">
            <div className="Layout__sidebar">Sidebar</div>
			<header className="Layout__header">Header</header>
            <div className="Layout__main">
                <main className="Layout__content">{children}</main>
            </div>
        </div>
    );
};

Layout.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

Layout.defaultProps = {
    className: undefined,
};
