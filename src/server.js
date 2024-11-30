const express = require('express');
const helmet = require('helmet');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { PORT } = require('./configs/env');
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const app = express();

// Segurança da aplicação
app.use(helmet());
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(cors({
    origin: 'http://example.com', // Substitua pelo domínio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Máximo de 100 requisições por IP
});
app.use(limiter);

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/produtos', produtoRoutes);
app.use('/usuarios', usuarioRoutes);
app.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

// Middleware de erro (deve ser o último middleware)
app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        res.status(403).json({ error: 'Token CSRF inválido ou ausente.' });
    } else {
        next(err);
    }
});
app.use(errorHandler);

// Iniciar o servidor
app.listen(PORT, () => {
    logger.info(`Servidor rodando na porta ${PORT}`);
});