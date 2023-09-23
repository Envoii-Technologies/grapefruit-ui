import React from 'react';

import { SideNav, PageHeader, PageContent, PageMenu, EditorTabSection } from './../../';

import './Editor.scss';

export const Editor = () => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu/>
                <div className="Page__wrapper__main">
                    <PageHeader isTransparent={false} title="Aufträge" subtitle="Nudeln zubereiten"/>
                    <PageContent isFluid={false} hasWrapper={false}>
                        <EditorTabSection/>
                    </PageContent>
                </div>
            </div>
        </div>
    );
};
