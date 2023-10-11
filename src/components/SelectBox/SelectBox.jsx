import React, { useEffect, useState } from 'react';
import Select from '@manifoldco/react-select-zero';
import '@manifoldco/react-select-zero/assets/react-select-zero.css';

import PropTypes from 'prop-types';
import './SelectBox.scss';

export const SelectBox = ({
	className,
	label,
	name,
    multi,
    options,
    value, 
    allowCreate,
    hasSearch,
    placeholder,
    onChange,
	...props
}) => {
    const [selection, setSelection] = useState(value || []);
    

    const handleOnChange = (e) =>
    {
        const newee = options.filter((option) => {
            return e.includes(option.title)
        });

        onChange({
                name: name,
                value: newee
        });
        setSelection(newee.map(a => a.title));
    }

    return (
		<>
		<label className="SelectBox__label">
                {label}
            </label>
			<div className='SelectBox'>
			 
            <Select
                name={name}
                options={options.map(a => a.title)}
                allowCreate={allowCreate}
                onChange={(e) => handleOnChange(e)}
                value={selection}
                noSearch={!hasSearch}
                multi={multi}
                placeholder={placeholder ? placeholder : label}
            >
                {/* Select a Pokémon */}
            </Select>
        </div>
		</>
        
    );
};

SelectBox.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * The name attribute for the select input.
     */
	name: PropTypes.string,
    /**
     * The label to display for the select box.
     */
	label: PropTypes.string,
    /**
     * The current selected value(s) in the select box.
     */
    value: PropTypes.arrayOf(PropTypes.string),
    /**
     * Allows creating new options in the select box if set to `true`.
     */
    allowCreate: PropTypes.bool,
    /**
     * The maximum number of selections allowed (for multi-select).
     */
    max: PropTypes.number,
    /**
     * Enables multi-select if set to `true`.
     */
    multi: PropTypes.bool,
    /**
     * Enables or disables the search functionality in the select box.
     */
    hasSearch: PropTypes.bool,
    /**
     * The placeholder text to display when no option is selected.
     * If not provided, the label is used as the placeholder.
     */
    placeholder: PropTypes.string,
    /**
    * An array of options to populate the select box.
    * Each option should be an object with `title` and `value` properties.
    */
    options: PropTypes.array,
    /**
     * A callback function to handle changes in the selected value(s).
     * It receives an object with `name` and `value` properties.
     */
    onChange: PropTypes.func
};

SelectBox.defaultProps = {
    className: undefined,
	label: undefined,
	name: '',
    allowCreate: false,
    max: Infinity,
    multi: false,
    hasSearch: false,
    placeholder: "",
    options: [
        {
            title: 'Bulbasaur',
            value: 'baba'
        },
        {
            title: 'Charmander',
            value: "charry"
        },
        {
            title: 'Squirtle',
            value: "squiqui"
        }
    ],
    onChange: undefined,
};
