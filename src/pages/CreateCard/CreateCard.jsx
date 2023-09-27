import React, { useState } from 'react';

import {
    PageHeader,
    PageMenu,
    ContentWrapper,
    Grid,
    Row,
    Column,
    Button,
    TextInput,
    SelectBox,
    TextArea,
    FormNotification,
} from './../../';

import './CreateCard.scss';

export const CreateCard = ({ userData, userMenu, onSendData, }) => {
    const [errorMessage, setErrorMessage] = useState({ type: '', message: '' });
    const [documentInfo, setDocumentInfo] = useState({
        title: '',
        description: '',
        language: '',
    });

    const languageOptions = [
        {
            title: 'Deutsch',
            value: 'german'
        },
        {
            title: 'Englisch',
            value: 'english'
        }
    ];

    const handleChangeDocumentInfo = (e) => {
        const value = e.target.value;

        setErrorMessage({ type: '', message: '' });

        setDocumentInfo({
            ...documentInfo,
            [e.target.name]: value,
        });
    };

    const handleSendData = () => {
        onSendData(documentInfo)
        console.log(documentInfo)
    }

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
                    >
                        <Button
                            label="Abbrechen"
                            type="secondary"
                            onClick={() => alert('[NOT IMPLEMENTED]')}
                        />
                        <Button
                            label="Speichern"
                            type="primary"
                            onClick={() => handleSendData()}
                            disabled={documentInfo.title.length < 1}
                        />
                    </PageHeader>
                    <ContentWrapper isFluid={false} hasWrapper={true}>
                        <Grid>
                            {errorMessage?.message && (
                                <Row>
                                    <Column>
                                        <FormNotification
                                            type="error"
                                            message={errorMessage.message}
                                        />
                                    </Column>
                                </Row>
                            )}
                            <Row>
                                <Column>
                                    <TextInput
                                        label="Titel"
                                        name="title"
                                        onChange={(e) =>
                                            handleChangeDocumentInfo(e)
                                        }
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <SelectBox
                                        label="Sprache"
                                        options={languageOptions}
                                        name="language"
                                        onChange={
                                            (e) => handleChangeDocumentInfo(e)
                                        }
                                    />
                                </Column>
                                <Column>
                                    <TextInput label="Klassifizierung" />
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <TextArea
                                        label="Notizen"
                                        name="description"
                                        placeholder="Notizen"
                                        onChange={
                                            (e) => handleChangeDocumentInfo(e)
                                        }
                                    />
                                </Column>
                            </Row>
                        </Grid>
                    </ContentWrapper>
                </div>
            </div>
        </div>
    );
};
