import React from 'react';

import { SideNav, PageHeader, PageMenu, EditorTabSection, ContentWrapper } from './../../';

import './Dashboard.scss';

export const Dashboard = ({ userData }) => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu userData={userData}/>
                <div className="Page__wrapper__main">
                    <PageHeader isTransparent={false} title="Dashboard"/>
                    <ContentWrapper isFluid={false} hasWrapper={false}>
                        
                    </ContentWrapper>
                </div>
            </div>
        </div>
    );
}