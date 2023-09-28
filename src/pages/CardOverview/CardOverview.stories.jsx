import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';

import { CardOverview } from './CardOverview';

export default {
    title: 'Pages/Cards/Overview',
    component: CardOverview,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <CardOverview userData={mockUser.userData} userMenu={mockMenu} {...args} />;

export const Default = Template.bind({});
