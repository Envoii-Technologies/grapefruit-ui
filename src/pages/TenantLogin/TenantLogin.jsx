import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    ContentBox,
    ContentWrapper,
    FormNotification,
    TextInput,
    Button,
} from './../../';

import './TenantLogin.scss';

export const TenantLogin = ({ error, eventLink, action, isInFocus, ...props }) => {
    const [tenant, setTenant] = useState('');
    const [errorMessage, setErrorMessage] = useState(!error ? '' : error);

    const resetErrorMessage = () => {
        setErrorMessage('');
    };

    const handleTenantFocus = () => {
        resetErrorMessage();
        setTenant('');
    };

    const handleTenantChange = (e) => {
        resetErrorMessage();
        setTenant(e.target.value);
    };

    const handleSendData = () =>
    {
        if(tenant === "") 
        {
            setErrorMessage('Bitte gültiges Unternehmen eingeben.');
        }
        else{
            action(tenant);
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSendData();
        }
    };

    return (
        <div className="Page">
            <div className="Page__wrapper">
                <ContentWrapper
                    hasPadding={false}
                    isCentered={true}
                    isFluid={false}
                    scollFix={false}
                >
                    <ContentBox
                        dropAmount={-5}
                        title="Mitarbeiter Login"
                        footer={
                            <p className="LoginWindow__footer__info">
                                Noch kein Account?{' '}
                                <a
                                    href={eventLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Jetzt Termin vereinbaren
                                </a>
                            </p>
                        }
                    >
                        {errorMessage && <FormNotification type="error" message={errorMessage}/>}
                        <TextInput
                            autoFocus={isInFocus}
                            type="text"
                            status={!errorMessage ? 'default' : 'error'}
                            placeholder="Unternehmens-Domain"
                            metaLabel=".envoii.de"
                            metaPosition="right"
                            onFocus={isInFocus ? () => handleTenantFocus() : undefined}
                            onChange={(e) => handleTenantChange(e)}
                            onKeyDown={(e) => handleKeyDown(e)}
                        />
                        <Button label="Weiter" type="primary" size="large" onClick={() => handleSendData()} />
                    </ContentBox>
                </ContentWrapper>
            </div>
        </div>
    );
};

TenantLogin.propTypes = {
    error: PropTypes.string,
    eventLink: PropTypes.string,
    isInFocus: PropTypes.bool,
    action: PropTypes.func,
};
TenantLogin.defaultProps = {
    error: undefined,
    eventLink: '/',
    isInFocus: true,
    action: undefined,
};
