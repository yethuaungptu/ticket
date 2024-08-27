const validator = (schema: any, data: any) => {
    const { error } = schema.validate(data, {
        dateFormat: 'date'
    });
    if (error == null) return null;
    else {
        const { details } = error;
        const dateRegex = /[a-zA-Z]{3} [a-zA-Z]{3} \d{2} \d{4}/;

        return details
            .map((i: any) => {
                const dateLimit = i.message.match(dateRegex)?.[0];
                return i.message.replaceAll('"', '').replaceAll('\\', '').replaceAll('ref:', '').replaceAll(dateLimit);
            })
            .join(', ');
    }
};

export default validator;
