import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DateSelectBox.scss';

export const DateSelectBox = ({ className, name, label, placeholder, value, onChange, ...props }) => {
    const [startDate, setStartDate] = useState(undefined);

	const handleOnChange = (date) => {
		setStartDate(date)

        onChange({
            target: 
            {
                name: name,
                value: date
            }
        });
	}

	useEffect(() =>
	{
		value = startDate;
	}, [startDate]);

    return (
        <>
            <label className="DateSelectBox__label" htmlFor={name}>
                {label}
            </label>
            <div
                className={`DateSelectBox ${
                    className !== undefined ? className : ''
                }`}
            >
                <DatePicker
                    selected={startDate}
					className="DateSelectBox__input"
                    onChange={(date) => handleOnChange(date)}
					shouldCloseOnSelect={true}
					placeholderText={placeholder ? placeholder : label}
                />
            </div>
        </>
    );
};

DateSelectBox.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
};

DateSelectBox.defaultProps = {
    className: undefined,
	name: undefined,
	label: "hello",
	placeholder: "",
};
