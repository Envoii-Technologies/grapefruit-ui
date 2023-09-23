import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    faMaximize,
    faMinimize,
    faSliders,
    faFileLines,
} from '@fortawesome/free-solid-svg-icons';

import testUserIcon from './../../assets/testuser.png';
import envoiiLogo from './../../assets/logo.png';

import helpers from '../../helpers/';

import { Button, Avatar } from '../../';

import './SideNav.scss';

export const SideNav = ({ className, isExpanded, user, menu, ...props }) => {
    const [expanded, setIsExpanded] = useState(isExpanded);
    return (
        <div
            className={`
			SideNav
			${className !== undefined ? className : ''}
		`}
        >
            
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
    user: PropTypes.object,
    menu: PropTypes.object,
};

SideNav.defaultProps = {
    className: undefined,
    isExpanded: true,
    user: {
        icon: 'static/media/src/assets/testuser.png',
        name: 'FF',
        roles: ['app_admin'],
    },
    menu: [
        {
            role: 'admin',
            items: [
                {
                    title: 'Einstellungen',
                    icon: faSliders,
                    path: '',
                    children: [
                        {
                            title: 'Benutzer',
                            onClick: () => alert('Open User Menu'),
                        },
                        {
                            title: 'Teams',
                            onClick: () => alert('Open Teams'),
                        },
                    ],
                },
            ],
        },
        {
            role: 'editor',
            items: [
                {
                    title: 'Karten',
                    icon: faFileLines,
                    onClick: () => alert('Open Cards'),
                },
            ],
        },
    ],
};
