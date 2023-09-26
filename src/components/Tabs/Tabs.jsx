import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollContainer } from 'react-indiana-drag-scroll';

import 'react-indiana-drag-scroll/dist/style.css';
import './Tabs.scss';

export const Tabs = ({ className, children, currentSelected, ...props }) => {
    const [tabs, setTabs] = useState(children);
    const [activeTab, setActiveTab] = useState(
        currentSelected < tabs?.length ? currentSelected : 0
    );

    return (
        <div className={`Tabs ${className !== undefined ? className : ''}`}>
            <div className="Tabs__menu">
                <ScrollContainer className="Tabs__container">
                    <div className="Tabs__container__wrapper">
                        {tabs &&
                            tabs.map((item, i) => (
                                <div
                                    key={i}
                                    className="Tabs__container__wrapper__content"
                                    onClick={() => setActiveTab(i)}
                                >
                                    {item.props.title}
                                </div>
                            ))}
                    </div>
                </ScrollContainer>
            </div>

            <div className="Tabs__content">
                {tabs && tabs[activeTab].props.children}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    currentSelected: PropTypes.number,
};

Tabs.defaultProps = {
    className: undefined,
    currentSelected: 0,
};
