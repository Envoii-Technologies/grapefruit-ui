import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './PageMenu.scss';
import { PageMenuMain, PageMenuSub } from './components/';

export const PageMenu = ({ className, isExpanded, user, ...props }) => {
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
            className={`PageMenu ${className !== undefined ? className : ''}
		`}
        >
            <PageMenuMain
                                isExpanded={expanded}
                                handleExpand={() =>setIsExpanded(!expanded)}
                                handleSettingsAction={() => alert("YO")}
            />
            <PageMenuSub isExpanded={expanded}/>
        </div>
    );
};

PageMenu.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
};

PageMenu.defaultProps = {
    className: undefined,
    isExpanded: true,
};
