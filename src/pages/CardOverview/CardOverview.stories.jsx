import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';
import mockCards from './../../data/MockCards';

import { CardOverview } from './CardOverview';

export default {
    title: 'Pages/Cards/Overview',
    component: CardOverview,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => (
    <CardOverview
        userData={mockUser.userData}
        userMenu={mockMenu}
        cardsData={mockCards}
        {...args} 
        />
    );

export const Default = Template.bind({});
