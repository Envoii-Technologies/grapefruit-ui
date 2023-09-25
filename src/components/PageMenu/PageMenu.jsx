import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './PageMenu.scss';
import { PageMenuMain, PageMenuSub } from './components/';

export const PageMenu = ({ className, isMenuExpanded, isUserMenuExpanded, userData, menuData, ...props }) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [expanded, setExpanded] = useState(isMenuExpanded);

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    useEffect(() => {
        setExpanded(isMenuExpanded)
    }, [isMenuExpanded])

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        setExpanded(screenSize.width < 768 ? false : isMenuExpanded);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize]);

    return (
        <div
            className={`PageMenu ${className !== undefined ? className : ''}
		`}
        >
            <PageMenuMain
                isExpanded={expanded}
                handleExpand={() => setExpanded(!expanded)}
                userMenuExpanded={isUserMenuExpanded}
                handleSettingsAction={() => alert('YO')}
                userData={userData}
                menuData={menuData}
            />
            <PageMenuSub
                isExpanded={expanded}
                userData={userData}
                menuData={menuData}
            />
        </div>
    );
};

PageMenu.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    isMenuExpanded: PropTypes.bool,
    isUserMenuExpanded: PropTypes.bool,
    userData: PropTypes.object,
    menuData: PropTypes.array,
};

PageMenu.defaultProps = {
    className: undefined,
    isMenuExpanded: false,
    isUserMenuExpanded: false,
    userData: undefined,
    menuData: undefined,
};
