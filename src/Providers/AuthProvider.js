import { createContext, useContext, useEffect, useState } from 'react';
import Storage from '../Storage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect( () => {
        if (Storage.exists('user'))
            setUser(Storage.get('user'));
    }, []);

    const check = () => {
        return Storage.exists('user');
    };

    return (
        <AuthContext.Provider value={{ user, check }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);