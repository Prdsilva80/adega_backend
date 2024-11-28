const prisma = require('../configs/database'); // Importando a instância do Prisma Client

const Produto = {
    // Método para obter todos os produtos
    async getAll() {
        return await prisma.produto.findMany();  // Retorna todos os produtos
    },

    // Método para obter um produto específico pelo ID
    async getById(id) {
        return await prisma.produto.findUnique({ where: { id: parseInt(id) } });  // Busca produto pelo ID
    },

    // Método para criar um novo produto
    async create(data) {
        return await prisma.produto.create({ data });  // Cria um produto com os dados passados
    },

    // Método para atualizar um produto existente
    async update(id, data) {
        return await prisma.produto.update({
            where: { id: parseInt(id) },  // Localiza o produto pelo ID
            data,  // Dados a serem atualizados
        });
    },

    // Método para excluir um produto
    async delete(id) {
        return await prisma.produto.delete({ where: { id: parseInt(id) } });  // Exclui o produto pelo ID
    },
};

module.exports = Produto;
