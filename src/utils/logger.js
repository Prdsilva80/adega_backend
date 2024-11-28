const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'logs', 'app.log');

// Função para registrar logs em arquivo
const logToFile = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) console.error('Erro ao gravar log:', err);
    });
};

// Função para logar no console e arquivo
const logger = {
    info: (message) => {
        console.info(message);
        logToFile(`INFO: ${message}`);
    },
    error: (message) => {
        console.error(message);
        logToFile(`ERROR: ${message}`);
    },
};

module.exports = logger;
