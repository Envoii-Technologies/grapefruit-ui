import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';

import { CreateCard } from './CreateCard';

export default {
    title: 'Pages/Cards/Create',
    component: CreateCard,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => (
    <CreateCard
        userData={mockUser.userData}
        userMenu={mockMenu}
        onSendData={(data) => alert(`
            Title: ${data.title}
            Language: ${data.language[0]?.title}
            Description: ${data.description}
        `)}
        {...args}
        />
);

export const Default = Template.bind({});
