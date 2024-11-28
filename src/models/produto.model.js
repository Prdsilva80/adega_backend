const prisma = require('../configs/database');

const Produto = {
    async getAll() {
        return await prisma.produto.findMany();
    },

    async getById(id) {
        return await prisma.produto.findUnique({ where: { id: parseInt(id) } });
    },

    async create(data) {
        return await prisma.produto.create({ data });
    },

    async update(id, data) {
        return await prisma.produto.update({
            where: { id: parseInt(id) },
            data,
        });
    },

    async delete(id) {
        return await prisma.produto.delete({ where: { id: parseInt(id) } });
    },
};

module.exports = Produto;
