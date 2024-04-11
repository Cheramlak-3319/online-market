exports.errorHandler = ((error, _, res, __) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Server error.';

    res.status(status).json({ error: { message: message, code: status } });
});

exports.endpointNotFoundError = async (req, res, next) => {
    next({ statusCode: 404, message: 'ROUTE_NOT_FOUND' });
}