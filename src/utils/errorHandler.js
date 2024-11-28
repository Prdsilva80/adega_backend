const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.message); // Registra o erro no log
    const statusCode = err.status || 500; // Código de status HTTP
    res.status(statusCode).json({
        error: {
            message: err.message || 'Erro interno no servidor',
            status: statusCode,
        },
    });
};

module.exports = errorHandler;
