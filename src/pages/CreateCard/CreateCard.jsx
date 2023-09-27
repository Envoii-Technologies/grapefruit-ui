import React, { useEffect, useState } from 'react';

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

export const CreateCard = ({ userData, userMenu, onSendData, onError }) => {
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

    useEffect(() => {
        setErrorMessage(onError);
    },
    [onError])

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
                    activeMenuItem={"/guides"}
                />
                <div className="Page__wrapper__main">
                    <PageHeader
                        isTransparent={false}
                        title="Dokumente"
                        subtitle="Neues Dokument"
                        options={[
                            {
                                label: "Abbrechen",
                                type: "secondary",
                                action: () => alert("[NOT IMPLEMENTED]")
                            },
                            {
                                disabled: documentInfo.title.length < 1,
                                label: "Speichern",
                                type: "primary",
                                action: () => handleSendData()
                            }
                        ]}
                    >
                    </PageHeader>
                    <ContentWrapper isFluid={false} hasWrapper={true}>
                        <Grid>
                            {errorMessage?.message && (
                                <Row>
                                    <Column>
                                        <FormNotification
                                            type={errorMessage.type}
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
