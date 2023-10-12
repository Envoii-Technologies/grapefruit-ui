import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    faArrowRightArrowLeft,
    faSliders,
    faFileLines,
    faGripLines,
    faRightFromBracket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Button';

import './SideBar.scss';

export const SideBar = ({ className, ...props }) => {
	const [ mainMenuExpanded, setMainMenuExpanded ] = useState(false);

	const handleExpand = () =>
	{
		setMainMenuExpanded(!mainMenuExpanded);
	}

    return (
        <div className={`SideBar ${className !== undefined ? className : ''}`}>
            <div className="SideBar__iconMenu">
                <nav className="SideBar__iconMenu__menu">
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
                </nav>
            </div>
			{
				mainMenuExpanded &&
				(
					<div className="SideBar__textMenu"></div>
				)
			}
        </div>
    );
};

SideBar.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

SideBar.defaultProps = {
    className: undefined,
};
