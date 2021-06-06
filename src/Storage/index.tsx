import React from 'react';

const PREFIX = '@Bakery-Order-System';

export default {
    get: (key : string) : any => {
        return JSON.parse(localStorage.getItem(`${PREFIX}/${key}`) as string);
    },

    set: (key : string, value : any) : void => {
        localStorage.setItem(`${PREFIX}/${key}`, JSON.stringify(value));
    },

    remove: (key : string) : void => {
        localStorage.removeItem(`${PREFIX}/${key}`);
    },

    exists: (key : string) : boolean => {
        return localStorage.getItem(`${PREFIX}/${key}`) != null;
    }
};