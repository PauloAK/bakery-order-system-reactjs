import React from 'react';
import Storage from '../Storage';

const BASE_URL = process.env.REACT_APP_API_URL; 

const Client = {
    _request : async (endPoint, method, body = {}) => {
        let data = {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: method != 'GET' ? JSON.stringify(body) : null
        };
        if (Storage.exists('token'))
            data.headers.Authorization = `Bearer ${Storage.get('token')}`;
        let req = await fetch(`${BASE_URL}${endPoint}`, data);
        return {
            status: req.status,
            json: await req.json()
        };
    },
    get : async (endPoint) => {
        return await Client._request(endPoint, 'GET');
    },

    post : async (endPoint, body) => {
        return await Client._request(endPoint, 'POST', body);
    },
    
    put : async (endPoint, body) => {
        return await Client._request(endPoint, 'PUT', body);
    },

    destroy : async (endPoint) => { // Unable to name as delete
        return await Client._request(endPoint, 'DELETE');
    }
};

export default Client;