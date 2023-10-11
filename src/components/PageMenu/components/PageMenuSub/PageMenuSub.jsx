import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { faSliders, faFileLines } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../../Button/Button';

import getHighestRole from '../../../../helpers/getHighestRole';

import envoiiLogo from './../../../../assets/logo.png';

import './PageMenuSub.scss';

export const PageMenuSub = ({
    className,
    isExpanded,
    userData,
    menuData,
    menu,
    activeMenuItem,
    ...props
}) => {
    const [ userRole, setUserRole ] = useState(getHighestRole(userData).role);

    return (
        <div
            className={`PageMenuSub 
            ${className !== undefined ? className : ''}
            ${isExpanded ? 'expanded' : 'compressed'}
        `}
        >
            <div className="PageMenuSub__logo">
                <img
                    src={envoiiLogo}
                    alt=""
                    className="PageMenuSub__logo__image"
                />
            </div>

            <div className="PageMenuSub__role">
                <p>{userRole}</p>
            </div>

            <nav className="PageMenuSub__content">
                <ul>
                    {menuData &&
                            menuData[userRole.toLowerCase()].map((item, i) => (
                                <li key={i}>
                                    <Button
                                        size="large"
                                        icon={item.icon}
                                        label={item.title}
                                        type={activeMenuItem === item.path ? 'primary' : 'default'}
                                        isFluid
                                    />
                                </li>
                            ))}
                </ul>
            </nav>
        </div>
    );
};

PageMenuSub.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * is the sidebar expanded?
     */
    isExpanded: PropTypes.bool,
    userData: PropTypes.object,
    menu: PropTypes.object,
};

PageMenuSub.defaultProps = {
    className: undefined,
    isExpanded: false,
    userData: undefined,
    menu: undefined,
};
