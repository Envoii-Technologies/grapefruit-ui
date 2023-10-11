import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';
import mockCards from './../../data/MockCards';

import { CardEditor } from './CardEditor';

export default {
    title: 'Pages/Cards/Editor',
    component: CardEditor,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => (
    <CardEditor
        userData={mockUser.userData}
        userMenu={mockMenu}
        cardData={mockCards[0]}
        {...args}
    />
);

export const Default = Template.bind({});
