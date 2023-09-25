import React from 'react';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenuItems';

import { Editor } from './Editor';

export default {
    title: 'Pages/Editor',
    component: Editor,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Editor userData={mockUser.userData} userMenu={mockMenu} {...args} />;

export const Default = Template.bind({});
