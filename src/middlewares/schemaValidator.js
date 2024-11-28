const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // Valida o corpo da requisição
        next(); // Se válido, prossiga para o próximo middleware ou controlador
    } catch (error) {
        res.status(400).json({ error: error.errors }); // Retorna os erros de validação
    }
};

module.exports = { validateSchema };
