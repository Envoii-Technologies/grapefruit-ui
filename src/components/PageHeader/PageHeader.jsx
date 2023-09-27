import React from 'react';
import PropTypes from 'prop-types';

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Button/Button';
import './PageHeader.scss';

export const PageHeader = ({
    className,
    isTransparent,
    title,
    children,
    helplink,
    subtitle,
    onBack,
    ...props
}) => {
    return (
        <div
            className={`PageHeader 
            ${className !== undefined ? className : ''}
            ${isTransparent ? 'transparent' : ''}
        `}
        >
            <div className="PageHeader__wrapper">
                <div className="PageHeader__wrapper__title">
                    {subtitle ? (
                        <>
                            <h4
                                className="PageHeader__wrapper__title__main link"
                                onClick={onBack}
                            >
                                {title}
                            </h4>
                            <h1 className="PageHeader__wrapper__title__sub">
                                {subtitle}
                            </h1>
                        </>
                    ) : (
                        <>
                            <h1 className="PageHeader__wrapper__title__sub">
                                {title}
                            </h1>
                        </>
                    )}
                </div>
                <div className="PageHeader__wrapper__menu">
                    <div className="PageHeader__wrapper__menu__content">
                        {children}
                        {helplink && (
                            <Button
                                size="small"
                                fluid={false}
                                icon={faCircleQuestion}
                                type="success"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
        // <div
        //     className={`
        // 	PageHeader
        // 	${className !== undefined ? className : ''}
        // 	${isTransparent ? 'transparent' : ''}
        // `}
        // >
        //     <div className="PageHeader__wrapper">
        //         <div className="PageHeader__wrapper__title">
        //             {subtitle ? (
        //                 <>
        //                     <h4
        //                         className="PageHeader__wrapper__title__main link"
        //                         onClick={onBack}
        //                     >
        //                         {title}
        //                     </h4>
        //                     <h1 className="PageHeader__wrapper__title__sub">
        //                         {subtitle}
        //                     </h1>
        //                 </>
        //             ) : (
        //                 <>
        //                     <h1 className="PageHeader__wrapper__title__sub">{title}</h1>
        //                 </>
        //             )}
        //         </div>
        // 		<div className="PageHeader__wrapper__menu">
        //                 <div className="PageHeader__wrapper__menu__content">
        //                     {children}

        //             {
        //                 helplink &&
        //                 <Button
        //                     size="small"
        //                     fluid={false}
        //                     icon={faCircleQuestion}
        //                     type="success"
        //                 />
        //             }

        //                 </div>
        //             </div>
        //     </div>
        // </div>
    );
};

PageHeader.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onBack: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]),
    hasBackground: PropTypes.bool,
    helplink: PropTypes.string,
};

PageHeader.defaultProps = {
    title: 'Default Title',
    subtitle: undefined,
    onBack: undefined,
    children: undefined,
    hasBackground: true,
    helplink: undefined,
};
