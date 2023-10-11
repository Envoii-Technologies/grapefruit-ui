import React from 'react';
import PropTypes from 'prop-types';
import './LoadingIndicator.scss';

export const LoadingIndicator = ({ className, fluid, full, color, ...props }) => {
    return (
        <div
            className={`LoadingIndicator 
                ${ className !== undefined ? className : "" }
                ${fluid ? 'fluid' : ''}
                ${ full ? 'full' : ''}`}
            {...props}
        >
            <div
                className="LoadingIndicator__spinner"
                style={{ color }}
            ></div>
        </div>
    );
};

LoadingIndicator.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
	/**
	 * Custom color of component
	 */
	color: PropTypes.string,
	/**
	 * Component takes 100% of parent element
	 */
    fluid: PropTypes.bool,
	/**
	 * Component takes 100% of view height
	 */
    full: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
    className: undefined,
    fluid: false,
    full: false,
	color: 'black',
};
