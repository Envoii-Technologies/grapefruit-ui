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
            <nav className="SideNav__left">
                <div className="SideNav__left__top">
                    <Button
                        icon={expanded ? faMinimize : faMaximize}
                        type="transparent"
                        onClick={() => setIsExpanded(!expanded)}
                    />
                </div>
                <div className="SideNav__left__bottom">
                    <Avatar
                        image={user.icon || testUserIcon}
                        name={user.name || '[MISSING]'}
                        size="small"
                    />
                </div>
            </nav>
            <div
                className={`SideNav__right ${
                    expanded ? 'expanded' : 'compressed'
                }`}
            >
                <div className="SideNav__right__logo">
                    <img
                        src={envoiiLogo}
                        alt=""
                        className="SideNav__right__logo__image"
                    />
                </div>

                <div className="SideNav__right__role">
                    <p>
                        {helpers.getHighestRole(user).allRoles || '[MISSING]'}
                    </p>
                </div>

                <nav className="SideNav__right__menu">
                    <ul>
                        {menu &&
                            menu
                                .filter((menu) =>
                                    helpers
                                        .getHighestRole(user)
                                        .allRoles.some((i) =>
                                            menu.role.includes(i)
                                        )
                                )
                                .map((menu, j) => (
                                    <li>
                                        {menu.items.map((item, j) => (
                                            <Button
                                                size="large"
                                                icon={item.icon}
                                                label={item.title}
                                                isFluid
                                            />
                                        ))}
                                    </li>
                                ))}
                    </ul>
                </nav>
            </div>
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
