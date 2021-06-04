import Client from './Client';

export default {
    signIn: async (email, password) => {
        return await Client.post('/api/v1/auth/login', {
            email,
            password
        });
    }
};