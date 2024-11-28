const { Usuario } = require('../models/usuarioModel');

// Função para obter todos os usuários
exports.getAllUsuarios = async () => {
    try {
        const usuarios = await Usuario.find();
        return usuarios;
    } catch (error) {
        throw new Error('Erro ao buscar usuários');
    }
};

// Função para criar um novo usuário
exports.createUsuario = async (usuarioData) => {
    try {
        const usuario = new Usuario(usuarioData);
        await usuario.save();
        return usuario;
    } catch (error) {
        throw new Error('Erro ao criar o usuário');
    }
};

// Função para atualizar um usuário
exports.updateUsuario = async (usuarioId, usuarioData) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(usuarioId, usuarioData, { new: true });
        if (!usuario) throw new Error('Usuário não encontrado');
        return usuario;
    } catch (error) {
        throw new Error('Erro ao atualizar o usuário');
    }
};

// Função para excluir um usuário
exports.deleteUsuario = async (usuarioId) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(usuarioId);
        if (!usuario) throw new Error('Usuário não encontrado');
        return usuario;
    } catch (error) {
        throw new Error('Erro ao excluir o usuário');
    }
};
