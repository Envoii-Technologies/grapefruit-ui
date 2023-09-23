import React from 'react';
// import { within, userEvent } from '@storybook/testing-library';

import { Editor } from './Editor';

export default {
    title: 'Pages/Editor',
    component: Editor,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Editor {...args} />;

export const Default = Template.bind({});
