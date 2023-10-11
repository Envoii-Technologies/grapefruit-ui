import React, { Children } from 'react';
import PropTypes from 'prop-types';

import {
    faCircleQuestion,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

import { Button, PopOver, SearchBar, TextInput } from '../../';
import './PageHeader.scss';

export const PageHeader = ({
    className,
    isTransparent,
    title,
    children,
    helplink,
    options,
    subtitle,
    action,
    onBack,
    hasSearchBar,
    onSearchBarInput,
    ...props
}) => {
    const handleAction = (action, e) => {
        action(e);
    };

    const handleSearchBarInput = (input) => {
        onSearchBarInput(input);
    };

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
                    <div className="PageHeader__wrapper__menu__mobile">
                        <PopOver
                            content={
                                <>
                                {
                                    options &&
                                    options.map((option, i) => (
                                        <Button
                                            key={i}
                                            disabled={option.disabled || false}
                                            className=""
                                            type={option.type || 'primary'}
                                            label={option.label}
                                            onClick={(e) =>
                                                handleAction(option.action, e)
                                            }
                                        />
                                    ))
                                }
                                </>
                                
                            }
                            position="bottom-right"
                        >
                            <Button icon={faEllipsisV}></Button>
                        </PopOver>
                    </div>
                    <div className="PageHeader__wrapper__menu__content">
                        {hasSearchBar && (
                            <>
                                <SearchBar
                                    handleSearchSubmit={(input) =>
                                        handleSearchBarInput(input)
                                    }
                                />
                            </>
                        )}
                        {options &&
                            options.map((option, i) => (
                                <Button
                                    key={i}
                                    disabled={option.disabled || false}
                                    className=""
                                    type={option.type || 'primary'}
                                    label={option.label}
                                    onClick={(e) =>
                                        handleAction(option.action, e)
                                    }
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
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
    hasBackground: PropTypes.bool,
    helplink: PropTypes.string,
    options: PropTypes.array,
    hasSearchBar: PropTypes.bool,
};

PageHeader.defaultProps = {
    title: 'Default Title',
    subtitle: undefined,
    action: undefined,
    onBack: undefined,
    hasBackground: true,
    helplink: undefined,
    options: undefined,
    hasSearchBar: false,
    onSearchBarInput: undefined,
};

{
    /* {children}
                        {helplink && (
                            <Button
                                size="small"
                                fluid={false}
                                icon={faCircleQuestion}
                                type="success"
                            />
                        )} */
}

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
