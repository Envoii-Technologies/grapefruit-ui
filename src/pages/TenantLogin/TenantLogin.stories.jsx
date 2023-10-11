import React from 'react';

import { TenantLogin } from './TenantLogin';

export default {
    title: 'Pages/Login/TenantLogin',
    component: TenantLogin,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <TenantLogin {...args} action={(data) => alert(data)} />;
const TemplateError = (args) => <TenantLogin {...args} isInFocus={false} error={"Kein Gültiges Unternehmen."} />;

export const Default = Template.bind({});
export const Error = TemplateError.bind({});
