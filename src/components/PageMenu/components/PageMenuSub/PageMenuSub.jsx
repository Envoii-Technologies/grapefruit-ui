import React from 'react';
import PropTypes from 'prop-types';

import { faSliders, faFileLines } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../../Button/Button';

import envoiiLogo from './../../../../assets/logo.png';

import './PageMenuSub.scss';

export const PageMenuSub = ({
    className,
    isExpanded,
    userData,
    menu,
    ...props
}) => {
    return (
        <div
            className={`PageMenuSub 
            ${className !== undefined ? className : ''}
            ${isExpanded ? 'expanded' : 'compressed'}
        `}
        >
            <div className="PageMenuSub__logo">
                <img
                    src={envoiiLogo}
                    alt=""
                    className="PageMenuSub__logo__image"
                />
            </div>

            <div className="PageMenuSub__role">
                <p>ADMIN</p>
            </div>

            <nav className="PageMenuSub__content">
                <ul>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faSliders}
                            label="Test 1"
                            isFluid
                        />
                    </li>
                    <li>
                        <Button
                            size="large"
                            icon={faFileLines}
                            label="Test 2"
                            isFluid
                        />
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

PageMenuSub.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * is the sidebar expanded?
     */
    isExpanded: PropTypes.bool,
    userData: PropTypes.object,
    menu: PropTypes.object,
};

PageMenuSub.defaultProps = {
    className: undefined,
    isExpanded: false,
    userData: undefined,
    menu: undefined,
};
