import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './../Card/';

import placeholder from './../../assets/placeholder.svg';

import './GuideCard.scss';

export const GuideCard = ({
    className,
    title,
    image,
    hasAnimation,
    topicAmount,
    instructionAmount,
    isDisabled,
    ...props
}) => {
    return (
        <Card
            className={`
            GuideCard ${className !== undefined ? className : ''}
            `}
            hasPadding={false}
            hasAnimation={hasAnimation}
            isDisabled={isDisabled}
        >
            <img
                className="GuideCard__wrapper__image"
                src={image}
                alt="alternative title"
            />
            <div className="GuideCard__wrapper__meta">
                <p className="GuideCard__wrapper__meta__info">
                    {topicAmount} Topik
                    {(topicAmount > 1 || topicAmount === 0) && 's'} |&nbsp;
                    {instructionAmount} Instruktion
                    {(instructionAmount > 1 || instructionAmount === 0) &&
                        'en'}
                </p>
                <h4 className="GuideCard__wrapper__meta__title">{title}</h4>
            </div>
        </Card>
    );
};

GuideCard.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Title of Card Component
     */
    title: PropTypes.string,
    /**
     * Image displayed above title
     */
    image: PropTypes.string,
    /**
     * Does the card animate on hover?
     */
    hasAnimation: PropTypes.bool,
    /**
     * Is the card disabled?
     */
    isDisabled: PropTypes.bool,
    /**
     * The amount of topics availible in specified Content
     */
    topicAmount: PropTypes.number,
    /**
     * The amount of instructionss availible in specified Content
     */
    instructionAmount: PropTypes.number,
};

GuideCard.defaultProps = {
    className: undefined,
    title: 'Default',
    image: placeholder,
    hasAnimation: true,
    isDisabled: false,
    topicAmount: 0,
    instructionAmount: 0,
};
