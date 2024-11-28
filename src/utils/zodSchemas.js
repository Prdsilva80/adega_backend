const { z } = require('zod');

// Schema para produtos
const produtoSchema = z.object({
    nome: z.string().min(1, 'O nome é obrigatório'), // Não permite string vazia
    descricao: z.string().optional(), // Campo opcional
    preco: z.number().positive('O preço deve ser positivo'), // Validação positiva
    quantidade: z.number().int().min(0, 'A quantidade não pode ser negativa'), // Inteiro >= 0
    categoria: z.string().min(1, 'A categoria é obrigatória'), // Categoria não pode ser vazia
});

// Schema para usuários
const usuarioSchema = z.object({
    nome: z.string().min(1, 'O nome é obrigatório'), // Nome do usuário obrigatório
    email: z.string().email('Email inválido'), // Email deve ser válido
    senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'), // Senha com mínimo de 6 caracteres
    telefone: z.string().optional(), // Campo opcional para telefone
    role: z.enum(['ADMIN', 'USER']).default('USER'), // Define permissões de acesso
});

// Exportando ambos os schemas
module.exports = {
    produtoSchema,
    usuarioSchema,
};