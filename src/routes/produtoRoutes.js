const express = require('express');
const { getProdutos, createProduto, updateProduto, deleteProduto } = require('../controllers/produtoController');
const { produtoSchema } = require('../utils/zodSchemas');
const { validateSchema } = require('../middlewares/schemaValidator'); // Middleware de validação
const router = express.Router();

// Rotas
router.get('/', getProdutos); // Obter lista de produtos

router.post('/', validateSchema(produtoSchema), createProduto); // Criar um novo produto

router.put('/:id', validateSchema(produtoSchema), updateProduto); // Atualizar um produto por ID

router.delete('/:id', deleteProduto); // Excluir um produto por ID

module.exports = router;
