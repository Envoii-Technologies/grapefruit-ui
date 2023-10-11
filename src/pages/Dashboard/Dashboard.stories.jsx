import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';

import { Dashboard } from './Dashboard';

export default {

    title: 'Pages/Dashboard',
    component: Dashboard,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Dashboard userData={mockUser.userData} userMenu={mockMenu} {...args} />;

export const Default = Template.bind({});
