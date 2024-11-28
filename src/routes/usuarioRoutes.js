const express = require('express');
const { getUsuarios, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarioController');
const { usuarioSchema } = require('../utils/zodSchemas');
const { validateSchema } = require('../middlewares/schemaValidator');
const router = express.Router();

// Rotas
router.get('/', getUsuarios); // Obter lista de usuários

router.post('/', validateSchema(usuarioSchema), createUsuario); // Criar um novo usuário

router.put('/:id', validateSchema(usuarioSchema), updateUsuario); // Atualizar um usuário por ID

router.delete('/:id', deleteUsuario); // Excluir um usuário por ID

module.exports = router;