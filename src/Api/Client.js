import Storage from '../Storage';

const BASE_URL = process.env.REACT_APP_API_URL; 

const Client = {
    get : async (endPoint) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            }
        });

        return {
            status: req.status,
            json: await req.json()
        };
    },

    post : async (endPoint, body) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            },
            body: JSON.stringify(body)
        });

        return {
            status: req.status,
            json: await req.json()
        };
    },

    
    put : async (endPoint, body) => {
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            },
            body: JSON.stringify(body)
        });

        return {
            status: req.status,
            json: await req.json()
        };
    },

    destroy : async (endPoint) => { // Unable to name as delete
        let req = await fetch(`${BASE_URL}${endPoint}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": getBearerToken()
            }
        });
        
        return {
            status: req.status,
            json: await req.json()
        };
    }
};

function getBearerToken()
{
    if (!Storage.exists('token'))
        return '';

    return `Bearer ${Storage.get('token')}`;
}

export default Client;