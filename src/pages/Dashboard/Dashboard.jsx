import React from 'react';

import {
    SideNav,
    PageHeader,
    PageMenu,
    EditorTabSection,
    ContentWrapper,
    Grid,
    Row,
    Column,
    ContentCard,
    ContentCardBody,
    ContentCardFooter,
    ContentCardHeader,
    Button,
} from './../../';

import './Dashboard.scss';

export const Dashboard = ({ userData, userMenu }) => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu
                    userData={userData}
                    menuData={userMenu}
                    isMenuExpanded={true}
                />
                <div className="Page__wrapper__main">
                    <PageHeader isTransparent={false} title="Dashboard" />
                    <ContentWrapper
                        isFluid={true}
                        hasWrapper={true}
                    >
                        
                    </ContentWrapper>
                </div>
            </div>
        </div>
    );
};
