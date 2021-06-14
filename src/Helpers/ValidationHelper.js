const ValidationHelper = {
    hasError: (key, errors) => {
        return errors.hasOwnProperty(key);
    },
    getErrors: (key, errors) => {
        if (typeof errors[key] == "undefined")
            return '';
        return errors[key].join("<br>");
    }
}

export default ValidationHelper;