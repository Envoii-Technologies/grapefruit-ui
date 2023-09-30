import React from 'react';
import PropTypes from 'prop-types';
import './StepManager.scss';
import { Button } from '../Button';
import { faBarsStaggered, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PopOver } from '../PopOver';

export const StepManager = ({ className, ...props }) => {
    return (
        <div
            className={`StepManager ${
                className !== undefined ? className : ''
            }`}
        >
            <div className="StepManager__menu">
                <PopOver
					className="StepManager__menu__popOver"
                    options={[
                        {
                            label: 'Arbeitsabfolge',
                            type: 'secondary',
                            action: () => console.log('test'),
                        },
                        {
                            label: 'Slide',
                            type: 'error',
                            action: () => console.log('test2'),
                        },
                    ]}
                >
                    <Button
                        icon={faPlus}
                        type="secondary"
                        label="Neuer Schritt"
                        isFluid={true}
                    ></Button>
                </PopOver>
            </div>
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
