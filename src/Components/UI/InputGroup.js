import * as React from 'react';

const InputGroup = ({  name, addon, placeholder, onChange, type = 'text', required = false, addonSide = 'left', value = '', children }) => {
    return (
        <>
            <div className="input-group">
                { addonSide == 'left' ?
                    <span className="input-group-addon left">
                        {addon}
                    </span>
                : ''}
                { children ?
                    children
                    :
                    <input name={name} type={type} onChange={onChange} placeholder={placeholder} required={required} value={value}/>
                }
                { addonSide == 'right' ?
                    <span className="input-group-addon right">
                        {addon}
                    </span>
                : ''}
            </div>
        </>
    )
}

export default InputGroup;