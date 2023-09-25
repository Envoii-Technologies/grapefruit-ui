import React from 'react';

import { UserLogin } from './UserLogin';

export default {
    title: 'Pages/Login/UserLogin',
    component: UserLogin,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <UserLogin {...args} />;

export const Default = Template.bind({});
