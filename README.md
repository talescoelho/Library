# Library

Collection Users
```
{
  "users": [
    {
      "userId": "id",
      "name": "string",
      "lastName": "string",
      "email": "string",
      "cpf": "string",
      "birth": "date",
      "sex": "string",
      "register": "date",
      "lastChange": "date",
      "address": {
        "postalCode": "string",
        "city": "string",
        "country": "string",
        "district": "string",
        "street": "string",
        "number": "number"
      },
      "contact": {
        "email": "string",
        "phoneNumber": ["string"]
      },
      "lastRead": "bookId",
      "loansQuantity": "number",
      "readGenders": {
        "first": "string",
        "second": "string",
        "third": "string"
      },
      "loans": [
        {
          "book": "bookId",
          "loanDate": "date",
          "returnDate": "date"
        }
      ]
      "level": { "INITIALS": "number" }
    }
  ]
}
```

Collection Books
```
{
  "books": [
    {
      "bookId": "id",
      "name": "string",
      "author": "authorId",
      "publisher": "string",
      "genders": {
        "first": "string",
        "second": "string",
        "others": ["string"]
      },
      "classification": "number",
      "publishedDate": "date",
      "register": "date",
      "lastChange": "date",
      "lastReader": "userId",
      "loanData": {
        "lent": "boolean",
        "userId": "userId",
        "loanDate": "date",
        "returnDate": "date"
      }
    }
  ]
}
```

Collection Authors
```
{
  "authors": [
    {
      "authorId": "id",
      "name": "string",
      "lastName": "string"
    }
  ]
}
```

Collection Loans
```
{
  "loans": [
    {
      "userId": "userId",
      "bookId": "bookId",
      "loanDate": "date",
      "returnDate": "date"
    }
  ]
}
```

# Levels:
- ADM:  0 - Responsável por administrar todas as pessoas
- ADM:  1 - Responsável por administrar os bibliotecários 0 ~ 2 e usuários 0 ~ 3
- ADM:  2 - Responsável por administrar os usuários 0 ~ 3
- LIB:  0 - Pode adicionar e remover livros e autores. Pode emprestar livros. Pode alterar o nível dos usuários
- LIB:  1 - Pode adicionar livros e autores. Pode emprestar livros. Pode alterar o nível dos usuários
- LIB:  2 - Pode emprestar livros. Pode alterar o nível dos usuários
- USER: 0 - usuário premium - 2 meses + sem atrazo na entrega - Pode emprestar até 3 livros por até 3 semanas
- USER: 1 - usuário padrão - Pode emprestar até 2 livros por até 2 semanas
- USER: 2 - usuário displicente 1 - atrazou a entrega de 1 livro - Pode emprestar até 1 livro por até 2 semanas
- USER: 3 - usuário displicente 2 - atrazou a entrega de 2 livros + - Pode emprestar até 1 livro por até 1 semana
- USER: 4 - usuário banido - perdeu/não entregou o livro

# Cadastro de Livros:
- Ao cadastrar um livro deve-se colocar quantos livros tem em estoque, para cada livro em estoque vai criar um livro com as mesmas caractesrísticas.
- Ao cadastrar um livro se não existir o Author do livro deve ter a opção de cadastrar um novo author.
- A classificação deve ser: 0, 10, 12, 14, 16, 18

# Empréstimo de livros:
- Usuários não podem emprestar livros que tenham a classificação maior que sua idade.
- Usuários não podem emprestar mais livros que o permitido pelos seus Levels.

# Páginas
- [ ] Login
- [ ] Cadastro
- Logado como ADM
- [ ] Fazer alterações nos usuários e Bibliotecários
- [ ] Fazer alterações nos Livros
- Logado como Bibliotecário
- [ ] Fazer alterações nos usuários
- [ ] Fazer alterações nos Livros
- Logado como Usuário
- [ ] Emprestar livros
- [ ] Alterar os próprios dados
