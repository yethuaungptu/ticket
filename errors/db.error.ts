exports.alreadyExistsError = (name: any, data: any) => {
    let err: any = new Error(name);
    err.name = 'ITEM_ALREADY_EXISTS';
    err.data = data;
    return err;
};
