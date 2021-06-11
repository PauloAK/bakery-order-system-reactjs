const PREFIX = '@Bakery-Order-System';

const Storage = {
    get: (key) => {
        return JSON.parse(localStorage.getItem(`${PREFIX}/${key}`));
    },

    set: (key, value) => {
        localStorage.setItem(`${PREFIX}/${key}`, JSON.stringify(value));
    },

    remove: (key) => {
        localStorage.removeItem(`${PREFIX}/${key}`);
    },

    exists: (key) => {
        return localStorage.getItem(`${PREFIX}/${key}`) != null;
    },

    clear: () => {
        return localStorage.clear();
    }
};

export default Storage;