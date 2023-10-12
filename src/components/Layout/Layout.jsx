import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

import { LayoutWrapper } from './LayoutWrapper';
import { LayoutWrapperMain } from './LayoutWrapperMain';
import { PageHeader } from './../PageHeader';
import { PageMenu } from '../PageMenu';

export const Layout = ({
    className,
    children,
    userData,
    menuData,
    ...props
}) => {
    return (
        <div className="Layout">
            <PageMenu userData={userData} menuData={menuData} />
            <LayoutWrapper>
                <PageHeader />

                <LayoutWrapperMain>
                    {children}
                </LayoutWrapperMain>
            </LayoutWrapper>
        </div>
    );
};

Layout.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

Layout.defaultProps = {
    className: undefined,
};
