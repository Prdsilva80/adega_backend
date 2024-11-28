const express = require('express');
const { PORT } = require('./configs/env');
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/produtos', produtoRoutes);
app.use('/usuarios', usuarioRoutes);

// Middleware de erro (deve ser o último middleware)
app.use(errorHandler);

// Iniciar o servidor
app.listen(PORT, () => {
    logger.info(`Servidor rodando na porta ${PORT}`);
});
