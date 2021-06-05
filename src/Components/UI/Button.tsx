import * as React from 'react';

interface IProps {
    text: string,
    onClick: any
};

const Button = ({ text, onClick } : IProps) => {
    return (
        <>
            <button onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default Button;