const { Produto } = require('../models/produtoModel');

// Função para obter todos os produtos
exports.getAllProdutos = async () => {
    try {
        const produtos = await Produto.find();
        return produtos;
    } catch (error) {
        throw new Error('Erro ao buscar produtos');
    }
};

// Função para criar um novo produto
exports.createProduto = async (produtoData) => {
    try {
        const produto = new Produto(produtoData);
        await produto.save();
        return produto;
    } catch (error) {
        throw new Error('Erro ao criar o produto');
    }
};

// Função para atualizar um produto
exports.updateProduto = async (produtoId, produtoData) => {
    try {
        const produto = await Produto.findByIdAndUpdate(produtoId, produtoData, { new: true });
        if (!produto) throw new Error('Produto não encontrado');
        return produto;
    } catch (error) {
        throw new Error('Erro ao atualizar o produto');
    }
};

// Função para excluir um produto
exports.deleteProduto = async (produtoId) => {
    try {
        const produto = await Produto.findByIdAndDelete(produtoId);
        if (!produto) throw new Error('Produto não encontrado');
        return produto;
    } catch (error) {
        throw new Error('Erro ao excluir o produto');
    }
};
