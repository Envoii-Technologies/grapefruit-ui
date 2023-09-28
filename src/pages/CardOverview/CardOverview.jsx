import React from 'react';

import { PageHeader, PageMenu } from './../../';

import './CardOverview.scss';

export const CardOverview = ({ userData, userMenu }) => {
    return (
        <div className="Page">
            <div className="Page__wrapper">
                <PageMenu
                    userData={userData}
                    menuData={userMenu}
                    isMenuExpanded={true}
                    activeMenuItem={'/guides'}
                />
                <div className="Page__wrapper__main">
                    <PageHeader
                        isTransparent={false}
                        title="Karten"
                        onBack={() => alert('[NOT IMPLEMENTED]')}
                        options={[
                            {
                                label: 'Neue Karte',
                                type: 'primary',
                                action: () => alert('[NOT IMPLEMENTED]')
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
