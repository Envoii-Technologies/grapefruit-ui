import React from 'react';

import { PageHeader, PageMenu, Tabs, TabItem, ContentWrapper, StepManager } from './../../';

import './CardEditor.scss';

export const CardEditor = ({ userData, userMenu, cardData }) => {

    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu
                    userData={userData}
                    menuData={userMenu}
                    isMenuExpanded={false}
                    activeMenuItem={"/guides"}
                />
                <div className="Page__wrapper__main">
                    <PageHeader
                        isTransparent={false}
                        title="Aufträge"
                        subtitle={cardData.title}
                        onBack={() => alert("[NOT IMPLEMENTED]")}
                    />
                    <Tabs>
                        <TabItem title="Schritte">
                            <div style={{ display: "flex", height: "100%"}}>
                                <StepManager steps={cardData.steps}/>
                                <div>
                                    
                                </div>
                            </div>
                        </TabItem>
                        <TabItem title="Informationen">
                            <p>title: {cardData.title}</p>
                            <p>description: {cardData.description}</p>
                            <p>released: {cardData.released ? "true" : "false"}</p>
                            <p>deleted: {cardData.deleted ? "true" : "false"}</p>
                            <p>version: {cardData.version}</p>
                            <p>createdBy: {cardData.createdBy}</p>
                            <p>updatedBy: {cardData.updatedBy}</p>
                            <p>createdAt: {cardData.createdAt}</p>
                            <p>updatedAt: {cardData.updatedAt}</p>
                        </TabItem>
                        <TabItem title="Medien">Medien...</TabItem>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
