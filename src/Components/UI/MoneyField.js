import * as React from 'react';
import CurrencyInput from 'react-currency-masked-input';

const InputGroup = ({ name, onChange, required = false, defaultValue, value}) => {
    if (defaultValue){
        defaultValue = defaultValue.toString();
        if (defaultValue.length >= 3)
            defaultValue = defaultValue.substr(0, defaultValue.length - 2) + '.' + defaultValue.slice(-2);
    }
    return (
        <CurrencyInput 
            onChange={onChange}
            required={required}
            defaultValue={defaultValue}
            name={name}
            separator="."
        />
    )
}

export default InputGroup;