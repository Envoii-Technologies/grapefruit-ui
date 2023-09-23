import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    faArrowRightArrowLeft,
    faSliders,
    faFileLines,
    faGripLines,
    faCircleUser,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../../Button/Button';

import './SideNavMain.scss';

export const SideNavMain = ({
    className,
    isExpanded,
    handleExpand,
    handleSettingsAction,
    handleLogoutAction,
    ...props
}) => {
    const [userExpanded, setIsUserExpanded] = useState(false);

    const handleUserMenuClick = (action) => {

        action !== undefined ? action() :  alert("[NOT IMPLEMENTED]");
    
        setIsUserExpanded(false);
    };

    return (
        <div
            className={`SideNavMain ${
                className !== undefined ? className : ''
            }`}
        >
            <nav className="SideNavMain__menu">
                <Button
                    className="SideNavMain__menu__large"
                    icon={faArrowRightArrowLeft}
                    type="transparent"
                    onClick={() => handleExpand()}
                />
                <Button
                    className="SideNavMain__menu__small"
                    icon={faGripLines}
                    type="transparent"
                    onClick={() => handleExpand()}
                />
                {!isExpanded && (
                    <ul className="SideNavMain__menu__items">
                        <li>
                            <Button
                                icon={faSliders}
                                type="transparent"
                                isFluid
                            />
                        </li>
                        <li>
                            <Button
                                icon={faFileLines}
                                type="transparent"
                                isFluid
                            />
                        </li>
                    </ul>
                )}
            </nav>
            <nav className="SideNavMain__meta">
                <Button
                    icon={faCircleUser}
                    type="transparent"
                    onClick={() => setIsUserExpanded(!userExpanded)}
                />
                {userExpanded && (
                    <>
                        <Button
                            icon={faSliders}
                            type="transparent"
                            onClick={() =>
                                handleUserMenuClick(handleSettingsAction)
                            }
                        />
                        <Button
                            icon={faRightFromBracket}
                            type="transparent"
                            onClick={() =>
                                handleUserMenuClick(handleLogoutAction)
                            }
                        />
                    </>
                )}
            </nav>
        </div>
    );
};

SideNavMain.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

SideNavMain.defaultProps = {
    className: undefined,
};
