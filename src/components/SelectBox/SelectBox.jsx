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
            target: 
            {
                name: name,
                value: newee
            }
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
                placeholder="Sprache"
            >
                Select a Pokémon
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
	name: PropTypes.string,
	label: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    allowCreate: PropTypes.bool,
    max: PropTypes.number,
    multi: PropTypes.bool,
    hasSearch: PropTypes.bool,
    placeholder: PropTypes.string,
    options: PropTypes.array,
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
