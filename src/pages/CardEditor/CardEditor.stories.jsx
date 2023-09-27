import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';

import { CardEditor } from './CardEditor';

export default {
    title: 'Pages/Cards/Editor',
    component: CardEditor,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <CardEditor userData={mockUser.userData} userMenu={mockMenu} {...args} />;

export const Default = Template.bind({});
