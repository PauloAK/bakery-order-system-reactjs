import * as React from 'react';

const InputArea = ({ icon, placeholder }) => {
    return (
        <>
            <div className="input-area w-full">
                {icon}
                <input type="text" placeholder={placeholder} />
            </div>
        </>
    )
}

export default InputArea;