import React from 'react';
import PropTypes from 'prop-types';

import './PageWrapper.scss';

export const PageWrapper = ({ className, ...props }) => {
    return (
        <div
            className={`PageWrapper ${
                className !== undefined ? className : ''
            }`}
        >
            PageWrapper Initiated!
        </div>
    );
};

PageWrapper.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

PageWrapper.defaultProps = {
    className: undefined,
};
