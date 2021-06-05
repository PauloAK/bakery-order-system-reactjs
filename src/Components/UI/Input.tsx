import * as React from 'react';

interface IProps {
    icon: any,
    placeholder : string
};

const Input = ({ icon, placeholder } : IProps) => {
    return (
        <>
            <div className="input-area w-full">
                {icon}
                <input type="text" placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input;