const notFound = (req, res, next) => {
    const error = `Not found ${req.originalUrl}`;
    res.status(404);
    next(error)
}

const handlerError = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        error: error,
        stack: process.env.NODE_ENV === 'production' ? 'message of error' : error.stack
    })
}


module.exports = {
    notFound,
    handlerError
}