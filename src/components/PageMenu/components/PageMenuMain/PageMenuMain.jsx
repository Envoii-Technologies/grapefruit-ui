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

import './PageMenuMain.scss'

export const PageMenuMain = ({ 
	className,
    isExpanded,
    handleExpand,
    userMenuExpanded,
    handleSettingsAction,
    handleLogoutAction,
    ...props
}) =>
{
	const [userExpanded, setIsUserExpanded] = useState(false);

	const handleUserMenuClick = (action) => {

        action !== undefined ? action() :  alert("[NOT IMPLEMENTED]");
    
        setIsUserExpanded(false);
    };

    useEffect(() => {
        setIsUserExpanded(userMenuExpanded)
    }, [userMenuExpanded]);

	return (
		<div className={`
			PageMenuMain
			${ className !== undefined ? className : "" }
		`}>
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
            <nav className="PageMenuMain__meta">
                <Avatar size="small" name="admin" onClick={() => setIsUserExpanded(!userExpanded)}></Avatar>
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
	)
}