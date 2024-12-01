const fs = require('fs');
const path = require('path');

// Caminho para o arquivo de log
const logDir = path.join(__dirname, '..', 'logs');
const logFile = path.join(logDir, 'app.log');

// Função para garantir que o diretório de logs exista
const ensureLogDirExists = () => {
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
};

// Função para registrar logs em arquivo
const logToFile = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // Garantir que o diretório de logs exista
    ensureLogDirExists();

    // Gravar a mensagem no arquivo de log
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
    warn: (message) => {
        console.warn(message);
        logToFile(`WARN: ${message}`);
    },
    error: (message) => {
        console.error(message);
        logToFile(`ERROR: ${message}`);
    },
    debug: (message) => {
        console.debug(message);
        logToFile(`DEBUG: ${message}`);
    }
};

module.exports = logger;
