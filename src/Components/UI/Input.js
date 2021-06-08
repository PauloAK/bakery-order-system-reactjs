import * as React from 'react';

const Input = ({ icon, placeholder }) => {
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