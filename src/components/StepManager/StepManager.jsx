import React from 'react';
import PropTypes from 'prop-types';
import './StepManager.scss';
import { Button } from '../Button';
import {
    faEllipsisV,
    faListOl,
    faPlus,
    faSlash,
    faTv,
} from '@fortawesome/free-solid-svg-icons';
import { PopOver } from '../PopOver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StepManager = ({ className, onAddNewStep, steps, ...props }) => {
    const handleAddNewStep = () => {
        onAddNewStep();
    };

    return (
        <div className={`StepManager ${className || ''}`}>
            <div className="StepManager__menu">
                <PopOver
                    className="StepManager__menu__popOver"
                    content={
                        <>
                            <Button
                                label="Arbeitsabfolge"
                                icon={faListOl}
                                onClick={() => handleAddNewStep()}
                            />
                            <Button
                                label="Slide"
                                icon={faTv}
                                onClick={() => handleAddNewStep()}
                            />
                        </>
                    }
                >
                    <Button
                        icon={faPlus}
                        type="secondary"
                        label="Neuer Schritt"
                        isFluid={true}
                    ></Button>
                </PopOver>
            </div>
            <ul className="StepManager__list">
                {steps &&
                    steps.map((step, i) => (
                        <li className="StepManager__list__item">
                            <div className="StepManager__list__item__title">
                                <FontAwesomeIcon icon={step.type === "instruction" ? faListOl : faTv }/>&nbsp;&nbsp;{i + 1}. {step.name}
                            </div>
                            <PopOver
                                position="bottom-right"
                                content={
                                    <>
                                        <Button
                                            label="Löschen"
                                            type="error"
                                            onClick={() => handleAddNewStep()}
                                        />
                                    </>
                                }
                            >
                                <Button icon={faEllipsisV} />
                            </PopOver>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

StepManager.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

StepManager.defaultProps = {
    className: undefined,
};
