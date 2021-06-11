import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AuthApi from '../Api/AuthApi';
import Swal from '../Components/UI/Swal';
import Storage from '../Storage';
import { useLoading } from './LoadingProvider';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const loading = useLoading();

    useEffect( () => {
        async function checkToken () {
            await checkForTokenRefresh();
            loading.hide();
        }
        if (Storage.exists('user')) {
            setUser(Storage.get('user'));
            loading.show();
            checkToken();
        }
    }, []);

    const check = () => {
        return Storage.exists('user');
    };

    const getToken = async () => {
        if (!Storage.exists('token'))
            return '';
        await checkForTokenRefresh();
        return `Bearer ${Storage.get('token')}`;
    };

    const checkForTokenRefresh = async () => {
        if (Storage.exists('isRefreshingToken'))
            return;
        let tokenRefreshDate = Storage.get('token_refresh_date');
        if ( !tokenRefreshDate || new Date(tokenRefreshDate) <= new Date ) {
            Storage.set('isRefreshingToken', true);
            let refresh = await AuthApi.refreshToken();

            if (refresh.status === 401) {
                Storage.clear();
                Swal.showSwal('error', 'Sessão expirada, faça login novamente', '', true);
                history.push('/signin');
            } else {
                Storage.set('token', refresh.json.token);
                let newRefreshDate = new Date;
                newRefreshDate.setMinutes( newRefreshDate.getMinutes() + 20 );
                Storage.set('token_refresh_date', newRefreshDate);
                Storage.remove('isRefreshingToken');
            }
        }
    }

    return (
        <AuthContext.Provider value={{ user, check, getToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);