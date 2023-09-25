import React, { useEffect, useState } from 'react';

import {
    faArrowRightArrowLeft,
    faSliders,
    faFileLines,
    faGripLines,
    faRightFromBracket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';

import { Button, Avatar } from '../../../../';

import './PageMenuMain.scss';

import getUsername from '../../../../helpers/getUsername';
import getHighestRole from '../../../../helpers/getHighestRole';

export const PageMenuMain = ({
    className,
    userData,
    menuData,
    isExpanded,
    handleExpand,
    userMenuExpanded,
    handleSettingsAction,
    handleLogoutAction,
    ...props
}) => {
    const [userExpanded, setIsUserExpanded] = useState(false);
    const [menu, setMenu] = useState(menuData);
    const [ userRole, setUserRole ] = useState(getHighestRole(userData).role);

    const handleUserMenuClick = (action) => {
        action !== undefined ? action() : alert('[NOT IMPLEMENTED]');

        setIsUserExpanded(false);
    };

    useEffect(() => {
        setIsUserExpanded(userMenuExpanded);
    }, [userMenuExpanded]);

    return (
        <div
            className={`
			PageMenuMain
			${className !== undefined ? className : ''}
		`}
        >
            <nav className="PageMenuMain__menu">
                <Button
                    className="PageMenuMain__menu__large"
                    icon={faArrowRightArrowLeft}
                    type="transparent"
                    onClick={() => handleExpand()}
                />
                <Button
                    className="PageMenuMain__menu__small"
                    icon={faGripLines}
                    type="transparent"
                    onClick={() => handleExpand()}
                />
                {!isExpanded && (
                    <ul className="PageMenuMain__menu__items">
                        {menuData &&
                            menuData[userRole.toLowerCase()].map((item, i) => (
                                <li key={i}>
                                    <Button
                                        icon={item.icon}
                                        type="transparent"
                                    />
                                </li>
                            ))}
                    </ul>
                )}
            </nav>
            <nav className="PageMenuMain__meta">
                <Avatar
                    size="small"
                    name={getUsername(userData)}
                    onClick={() => setIsUserExpanded(!userExpanded)}
                ></Avatar>
                {userExpanded && (
                    <>
                        <Button
                            icon={faGear}
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
