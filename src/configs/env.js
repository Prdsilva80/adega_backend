const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL,
};
