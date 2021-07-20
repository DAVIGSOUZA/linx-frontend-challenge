# LINX FRONTEND CHALLENGE
O desafio consiste no desenvolvimento do layout de uma landing page com uma grade de produtos( [API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1) ) e um formulário de newsletter. Seu principal objetivo é transformar este [LAYOUT](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614) em uma página funcional.

## Deploy vercel
https://linx-frontend-challenge.vercel.app/

### Tecnologias adotadas
- Projeto desenvolvido em HTML, CSS e JS puro.
- Este projeto não possui dependências.

### Para rodar o projeto localmente
1. Clonar o repositório
2. Rodar aplicação em um servidor web (ex: extensão do VScode live server)*
3. Para acessar a página de email, na barra de endereço no final da url substituir `index.html` por `email.html`

*Acessar diretamente o arquivo pelo gerenciador pode gerar comportamentos inesperados.


## Checklist
### Requisitos
✅ Implementação de acordo com o layout.

✅ HTML mais semântico possível utilizando-se das tags do HTML5.

✅ Layout responsivo

✅ Preencher a página com as informações dos produtos, consultando a API de forma paginada

✅ Para cada produto retornado pela API, um card de produto com as respectivas informações é criado na grade de produtos

✅ Ao clicar no botão "Ainda mais produtos aqui!" a próxima página da API é consultada, gerando mais 8 produtos na grade existente, abaixo dos produtos já carregados pela primeira requisição

✅ Formulário de newsletter com o título "Compartilhe a novidade" com campos de input validados de acordo com o conteúdo

✅ Commits ao longo do desenvolvimento

✅ README.md que contenha as informações de setup e a descrição do projeto

✅ Live preview do desafio em um provedor. (VERCEL)

✅ Não utilização de frameworkk, libs ou qualquer dependência.

✅ Documentação das funções através de comentários no código.

### Funcionalidades não exigidas

✅ Formulário de "ajude o algorítmo" com campos de input validados de acordo com o conteúdo

✅ Feedback das validações através de tags `span` logo abaixo dos inputs

✅ Arquivo email.html contendo o design proposto para o email. O enunciado do desafio não deixa claro como a funcionalidade deve ser implantada.

❌ Não foram adicionados loadings/spinners

❌ Feedback ao usuário ao clicar em comprar poderia ser melhorado
