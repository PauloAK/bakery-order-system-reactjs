import React, { createContext, useState } from 'react';
import Loading from '../Components/UI/Loading';

interface IProps {
    children : any
}

export const LoadingContext = createContext({
    show: () => {},
    hide: () => {},
});

export const LoadingProvider = ({ children } : IProps) => {
    const [loading, setLoading] = useState(false);
    
    const show = () => {
        setLoading(true);
    }

    const hide = () => {
        setLoading(false);
    }

    return (
        <LoadingContext.Provider value={{ hide, show }}>
            {children}
            { loading ? <Loading /> : '' }
        </LoadingContext.Provider>
    )
}