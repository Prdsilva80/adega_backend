// Em produtoController.js
const produtoService = require('../services/produtoService');

exports.getProdutos = async (req, res) => {
    try {
        const produtos = await produtoService.getAllProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProduto = async (req, res) => {
    try {
        const novoProduto = req.body; // Dados validados já estarão aqui
        res.status(201).json({ message: 'Produto criado com sucesso!', produto: novoProduto });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produtoAtualizado = req.body;
        res.status(200).json({ message: `Produto ${id} atualizado com sucesso!`, produto: produtoAtualizado });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Produto ${id} removido com sucesso!` });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover produto' });
    }
};
