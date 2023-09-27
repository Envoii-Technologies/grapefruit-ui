import React from 'react';
import PropTypes from 'prop-types';
import './ContentWrapper.scss';

export const ContentWrapper = ({
    className,
    children,
    isFluid,
    isCentered,
    hasWrapper,
    hasPadding,
    scollFix,
    ...props
}) => {
    return (
        <div
            className={`ContentWrapper ${
                className !== undefined ? className : ''
            }`}
        >
            {hasWrapper ? (
                <div
                    className={`ContentWrapper__wrapper
					${isFluid ? 'fluid' : ''}
					${scollFix ? 'scrollFix' : ''}
					${hasPadding ? 'padded' : ''} ${
                        isCentered ? 'centered' : ''
                    }`}
                >
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};

ContentWrapper.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    hasWrapper: PropTypes.bool,
    hasPadding: PropTypes.bool,
    isCentered: PropTypes.bool,
    isFluid: PropTypes.bool,
	scollFix: PropTypes.bool,
};

ContentWrapper.defaultProps = {
    className: undefined,
    hasPadding: true,
    hasWrapper: true,
    isCentered: false,
    isFluid: false,
	scollFix: true,
};
