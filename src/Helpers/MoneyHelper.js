const MoneyHelper = {
    format: function(value){
        value = value.toString().padStart(3, '0');
        value = parseFloat(value.slice(0, -2) + '.' + value.slice(-2));
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    },

    toInt: function(masked_value){
        return parseInt(masked_value.replace(/ /g, '').replace(',', '').trim());
    },
}

export default MoneyHelper;