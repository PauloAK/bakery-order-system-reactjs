import Storage from '../Storage';

const BASE_URL = process.env.REACT_APP_API_URL; 

export default {
    
    get: async (endPoint) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            }
        });
        return await req.json();
    },

    post: async (endPoint, body) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            },
            body: JSON.stringify(body)
        });
        return await req.json();
    },

    
    put: async (endPoint, body) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            },
            body: JSON.stringify(body)
        });
        return await req.json();
    },

    delete: async (endPoint) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            }
        });
        return await req.json();
    },

    getBearerToken: () => {
        if (!Storage.exists('token'))
            return '';

        return `Bearer ${Storage.get(token)}`;
    }
};