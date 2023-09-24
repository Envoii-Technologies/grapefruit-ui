import React from 'react';

import { TenantLogin } from './TenantLogin';

export default {
    title: 'Pages/Login/TenantLogin',
    component: TenantLogin,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <TenantLogin {...args} />;

export const Default = Template.bind({});
