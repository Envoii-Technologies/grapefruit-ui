import React from 'react';

import {
    PageHeader,
    PageMenu,
    ContentWrapper,
    Grid,
    Row,
    Column,
    Button,
    TextInput,
} from './../../';

import './CreateCard.scss';

export const CreateCard = ({ userData, userMenu }) => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu
                    userData={userData}
                    menuData={userMenu}
                    isMenuExpanded={true}
                />
                <div className="Page__wrapper__main">
                    <PageHeader
                        isTransparent={false}
                        title="Dokumente"
                        subtitle="Neues Dokument"
                    />
                    <ContentWrapper isFluid={false} hasWrapper={true}>
                        <Grid>
                            <Row>
                                <Column>
                                    <TextInput label="Titel" />
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <TextInput label="Sprache" />
                                </Column>
                                <Column>
                                    <TextInput label="Klassifizierung" />
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <TextInput label="Notizen" />
                                </Column>
                            </Row>
                        </Grid>
                    </ContentWrapper>
                </div>
            </div>
        </div>
    );
};
