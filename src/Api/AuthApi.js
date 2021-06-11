import Client from './Client';

export const AuthApi = {
    signIn: async (formData) => {
        return await Client.post('/api/v1/auth/login', formData);
    },
    me: async () => {
        return await Client.post('/api/v1/auth/me', {});
    },
    refreshToken: async () => {
        return await Client.post('/api/v1/auth/refresh');
    }
};

export default AuthApi;