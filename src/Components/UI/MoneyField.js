import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Inputmask from "inputmask";
import MoneyHelper from '../../Helpers/MoneyHelper';

const MoneyField = ({ name, onChange, required = false, defaultValue}) => {
    const [value, setValue] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        if (defaultValue || defaultValue === 0)
            setValue(defaultValue.toString().padStart(3, '0'));
    }, [defaultValue])
    
    const triggerChange = (e) => {
        let event = {
            currentTarget: {
                name: name,
                value: MoneyHelper.toInt(e.target.value)
            }
        };
        onChange(event);
    }

    useLayoutEffect(() => {
        if (ref?.current) {
            const inputmask = new Inputmask("decimal", {
                mask: '[999 999 999 99]9,99',
                numericInput: true,
                type: "decimal",
                greedy: false,
                placeholder: '',
                showMaskOnHover: false                
            });

            inputmask.mask(ref.current);
        }
    }, []);

    return (
        <input
            type="text"
            ref={ref}
            onChange={e => { setValue(e.target.value); triggerChange(e) }}
            required={required}
            value={value}
            name={name}
        />
    )
}

export default MoneyField;