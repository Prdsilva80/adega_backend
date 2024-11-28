// Em usuarioController.js
const usuarioService = require('../services/usuarioService');

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const novoUsuario = req.body; // Dados validados
        res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: novoUsuario });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioAtualizado = req.body;
        res.status(200).json({ message: `Usuário ${id} atualizado com sucesso!`, usuario: usuarioAtualizado });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Usuário ${id} removido com sucesso!` });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover usuário' });
    }
};
