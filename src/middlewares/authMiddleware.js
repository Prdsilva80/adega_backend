const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // 'Bearer token'

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Armazena as informações do usuário no objeto `req`
        next(); // Permite que a requisição continue
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};

module.exports = authMiddleware;
