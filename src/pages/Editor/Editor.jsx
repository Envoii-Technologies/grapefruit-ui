import React from 'react';

import { SideNav, PageHeader, PageMenu, EditorTabSection, ContentWrapper } from './../../';

import './Editor.scss';

export const Editor = ({ userData }) => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu userData={userData} isMenuExpanded={false}/>
                <div className="Page__wrapper__main">
                    <PageHeader isTransparent={false} title="Aufträge" subtitle="Nudeln zubereiten"/>
                    <ContentWrapper isFluid={false} hasWrapper={false}>
                        <EditorTabSection/>
                    </ContentWrapper>
                </div>
            </div>
        </div>
    );
};
