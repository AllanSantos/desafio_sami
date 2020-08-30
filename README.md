# Desafio_Sami :rocket:

## Projeto
  O teste consiste em desenvolver uma API Rest de listagem de beneficiários, com alguns  dados básicos:    Nome, CPF, RG, Data de Nascimento, Tipo de Plano (pode ser Basic, Standard ou Premium) e  Número de dependentes (este campo pode ser vazio ou não).   

## Tecnologias utilizadas:

- **Express**
  > É um framework para Node. js.
  
- **Cors**
  > Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
  
- **yup**
  > Ferramenta para validação de dados

- **EsLint**
  > É uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript

- **Prettier**
  > Responsável por formatar o código de acordo com regras cadastradas.
  
- **Banco MongoDB**
  > Banco NoSql MongoDB.

- **mongoose**
  >  Biblioteca do Nodejs para modelar os dados do MongoDB.
  
- **nodemon**
  > Em modo Dev, é um file watcher que roda internamente o próprio comando node.
  
- **sucrase**
  > É uma alternativa ao Babel que permite um desenvolvimento muito rápido.
  
- **cpf-cnpj-validator**
  > Lib para validação de CPF.


## Comandos Projeto
- Rodar comando yarn
  > Para baixar as dependecias.

- Rodando servidor yarn dev
  > Para iniciar o servidor NodeJS.

## API's
Foram criadas 4 rotas na aplicação, que são:

  - **post('/register') :** cadastra um beneficiario no banco de dados.
    ~~~JSON
    //Exemplo de Body
    {
	    "nome": String,
	    "cpf": String,
	    "rg": String,
	    "data_nascimento": String(data em formato de texto),
	    "plano": String,
	    "dependentes": Number
    }
    ~~~
  
  - **put('/update/:cpf') :** rota de update do beneficiario.  
   ~~~JSON
    //Exemplo de Body
    //passar o cpf do beneficiario na rota para validar a busca
    {
	    "nome": String,
	    "cpf": String,
	    "rg": String,
	    "data_nascimento": String(data em formato de texto),
	    "plano": String,
	    "dependentes": Number
    }
  ~~~
  
  - **get('/index/:cpf') :** retorna um usuario, relacionado ao cpf informado na rota.
  ~~~JSON
    //passar o cpf do beneficiario na rota para validar a busca
  ~~~
  
  - **delete('/delete/:cpf') :** deleta um usuario, relacionado ao cpf informado na rota.
  ~~~JSON
    //passar o cpf do beneficiario na rota para validar a busca
  ~~~
 
