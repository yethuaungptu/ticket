const ok = (res: any, message: string, data: any = null) => {
    return res.status(200).json({
        status: 'success',
        message,
        data
    });
};

const created = (res: any, message: string, data: any = null) => {
    return res.status(201).json({
        status: 'success',
        message,
        data
    });
};

const notFound = (res: any, message: string, data: any = null) => {
    return res.status(404).json({
        status: 'error',
        message,
        data
    });
};

const error = (res: any, message: string, data: any = null) => {
    return res.status(500).json({
        status: 'error',
        message,
        data
    });
};

const AuthFail = (res: any, message = 'Auth Fail') => {
    return res.status(401).json({
        status: 'error',
        message
    });
};

export default { ok, created, notFound, error, AuthFail };
