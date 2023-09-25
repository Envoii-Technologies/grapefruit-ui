import React from 'react';

import { ContentWrapper } from './../../';

import './UserLogin.scss';

export const UserLogin = () => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <ContentWrapper hasPadding={false} isCentered={true} isFluid={true}>
                    LOGIN WINDOW
                </ContentWrapper>
            </div>
        </div>
    );
};
