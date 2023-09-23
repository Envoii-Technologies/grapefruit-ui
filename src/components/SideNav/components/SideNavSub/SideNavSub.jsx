import React from 'react';
import PropTypes from 'prop-types';

import { faSliders, faFileLines } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../../Button/Button';

import envoiiLogo from './../../../../assets/logo.png';

import './SideNavSub.scss';

export const SideNavSub = ({
    className,
    isExpanded,
    userData,
    menu,
    ...props
}) => {
    return (
        <div
            className={`
            SideNavSub
            ${className !== undefined ? className : ''}
            ${isExpanded ? 'expanded' : 'compressed'}
        `}
        >
            <div className="SideNavSub__logo">
                <img
                    src={envoiiLogo}
                    alt=""
                    className="SideNavSub__logo__image"
                />
            </div>

            <div className="SideNavSub__role">
                <p>ADMIN</p>
            </div>

            <nav className="SideNavSub__menu">
                <ul>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

SideNavSub.propTypes = {
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

SideNavSub.defaultProps = {
    className: undefined,
    isExpanded: false,
    userData: undefined,
    menu: undefined,
};
