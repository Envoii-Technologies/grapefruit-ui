import React from 'react';

import { PageHeader, PageMenu, Tabs, ContentWrapper, TabItem } from './../../';

import './CardEditor.scss';

export const CardEditor = ({ userData, userMenu }) => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu
                    userData={userData}
                    menuData={userMenu}
                    isMenuExpanded={false}
                />
                <div className="Page__wrapper__main">
                    <PageHeader
                        isTransparent={false}
                        title="Aufträge"
                        subtitle="Nudeln zubereiten"
                        onBack={() => alert("[NOT IMPLEMENTED]")}
                    />
                    <Tabs>
                        <TabItem title="Schritte">Schritte...</TabItem>
                        <TabItem title="Informationen">
                            Informationen...
                        </TabItem>
                        <TabItem title="Module">Module...</TabItem>
                        <TabItem title="Medien">Medien...</TabItem>
                        <TabItem title="Material">Material...</TabItem>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
