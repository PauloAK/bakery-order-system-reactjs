import * as React from 'react';

const Box = ({ title, children }) => {
    return (
        <>
            <div className="box p-2 px-4 w-full bg-white rounded-xl shadow-md">
                {
                    title ?
                        <>
                            <span className="text-gray-800 text-lg font-medium">{title}</span>
                            <hr className="hr w-full mb-2"/>
                        </>
                    : ''
                }
                {children}
            </div>
        </>
    )
}

export default Box;