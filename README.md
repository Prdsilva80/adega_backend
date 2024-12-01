# Adega Backend

Este é o backend para a aplicação Adega, responsável por gerenciar produtos e usuários de forma segura e eficiente.

## Funcionalidades

- Gerenciamento de produtos (CRUD).
- Gerenciamento de usuários (CRUD).
- Segurança robusta com Helmet, CSRF e Rate Limiting.
- Logs de aplicação para monitoramento.
- Tratamento de erros centralizado.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento.
- **Express:** Framework para a criação do servidor.
- **Prisma:** ORM para interação com o banco de dados.
- **zod:** Biblioteca para validação de esquemas e dados.
- **Helmet:** Middleware de segurança.
- **CSURF:** Proteção contra ataques CSRF.
- **Express-Rate-Limit:** Limitação de requisições para prevenir abusos.
- **Nodemon:** Ferramenta para desenvolvimento com recarga automática.
- **Winston:** Para logging.

## Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** para gerenciar pacotes
- **Banco de Dados** configurado com o Prisma.

## Configuração

1. Clone o repositório:

    ```
    git clone https://github.com/seu-usuario/adega-backend.git
    cd adega-backend
    ```

2. Instale as dependências:

    ```
    npm install
    ```

3. Configure as variáveis de ambiente no arquivo `.env`

    ```
    PORT=3000
    DATABASE_URL="sua_url_de_banco_de_dados"
    ```

4. Gere os arquivos Prisma:

    ```
    npx prisma generate
    ```

5. (Opcional) Aplique as migrações:

    ```
    npx prisma migrate dev
    ```

## Execução

### Ambiente de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com recarga automática:

```
npm run dev
```
### Ambiente de Produção

Para rodar em produção:

```
npm start
```

## Rotas

### Produtos

- `GET /produtos`: Lista todos os produtos.
- `GET /produtos/:id`: Retorna um produto específico.
- `POST /produtos`: Cria um novo produto.
- `PUT /produtos/:id`: Atualiza um produto existente.
- `DELETE /produtos/:id`: Remove um produto.

### Usuários

- `GET /usuarios`: Lista todos os usuários.
- `GET /usuarios/:id`: Retorna um usuário específico.
- `POST /usuarios`: Cria um novo usuário.
- `PUT /usuarios/:id`: Atualiza um usuário existente.
- `DELETE /usuarios/:id`: Remove um usuário.

## Segurança

A aplicação utiliza os seguintes recursos para proteção:

- **Helmet:** Configura cabeçalhos HTTP para maior segurança.
- **CSRF Protection:** Proteção contra ataques de falsificação de requisições.
- **Rate Limiting:** Limitação de requisições por IP.

## Logs

O sistema de logs utiliza Winston para registrar:

- Informações sobre o funcionamento do servidor.
- Erros ocorridos durante a execução.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch com a sua feature:
    ```
    git checkout -b minha-feature
    ```

3. Faça commit das suas alterações:
    ```
    git commit -m "feat: descrição da sua feature"
    ```

4. Envie para a sua branch:
    ```
    git push origin minha-feature
    ```

5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).

Sinta-se à vontade para personalizar conforme necessário!