import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    faSliders,
    faFileLines,
    faRightFromBracket,
    faArrowRightArrowLeft,
    faGripLines,
    faCircleUser,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../';

import { SideNavMain, SideNavSub } from './components';

import './SideNav.scss';

export const SideNav = ({ className, isExpanded, user, ...props }) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [expanded, setIsExpanded] = useState(true);

    function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

      useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
    
        setIsExpanded(screenSize.width < 768 ? false : isExpanded);

        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  }, [screenSize])

    return (
        <div
            className={`
    			SideNav
	    		${className !== undefined ? className : ''}
		    `}
        >
            <SideNavMain
                isExpanded={expanded}
                handleExpand={() =>setIsExpanded(!expanded)}
                handleSettingsAction={() => alert("YO")}
            />
            <SideNavSub
                isExpanded={expanded}
            />
        </div>
    );
};

SideNav.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * is the sidebar expanded?
     */
    isExpanded: PropTypes.bool,
};

SideNav.defaultProps = {
    className: undefined,
    isExpanded: false,
};
