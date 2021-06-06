import ISignIn from '../Interfaces/ISignIn';
import Client from './Client';

export default {
    signIn: async (formData : ISignIn) => {
        return await Client.post('/api/v1/auth/login', formData);
    },

    me: async () => {
        return await Client.post('/api/v1/auth/me', {});
    },
};