## Nome: Ariel Elano Barth

# Series Journal - Fase 1

Este é um projeto de gerenciamento de séries assistidas (CRUD estático), desenvolvido com React para a disciplina de Desenvolvimento de Sistemas Frontend.

## 🚀 Como executar o projeto

Para rodar este projeto na sua máquina, siga os passos abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Descompacte o arquivo `.zip` ou faça o clone do repositório.
3. Abra o terminal na pasta raiz do projeto.
4. Instale as dependências do projeto executando o comando:
   ```bash
   npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
O terminal exibirá um link local (geralmente http://localhost:5173). Clique ou copie e cole no seu navegador para visualizar a aplicação.

## 🧪 Como executar os testes
Nesta Fase 1 do projeto, o foco foi na estruturação estática do frontend, roteamento e componentização. Portanto, não há testes automatizados implementados no momento. A suíte de testes será incluída na Fase 2 do desenvolvimento.


## 🧩 Descrição dos Componentes
NavBar: Componente de navegação principal. Contém os links estáticos para roteamento entre a Página Inicial, página Sobre, Cadastro e Lista de Séries utilizando o react-router-dom.

SerieForm: Componente responsável pela entrada de dados (formulário). Serve tanto para cadastrar novas séries quanto para editar séries existentes. Possui controle de estado para os inputs e validação básica garantindo o preenchimento de campos obrigatórios (Título e Número de Temporadas) antes de salvar.

SerieList: Componente de exibição. Recebe a lista de séries via props e renderiza cada item na tela, disponibilizando os botões de ação "Editar" e "Excluir" atrelados a funções passadas pelos componentes pai.

## 🛠️ Decisões de Desenvolvimento e Arquitetura
Gerenciamento de Estado (Lifting State Up): Como a Fase 1 exige um CRUD estático sem consumo de API, o estado principal series e as funções de manipulação foram centralizadas no componente raiz (App.jsx). Isso permite distribuir as ações via props para as páginas.

Roteamento Inteligente: O fluxo de edição foi otimizado reaproveitando a rota /cadastro. Utilizando o useNavigate e o useLocation, é possível passar a série a ser editada pelo state da rota, preenchendo automaticamente o SerieForm de forma elegante e limpa.

Ferramentas: O projeto foi gerado utilizando o Vite pela sua rapidez, e o React Router DOM foi escolhido para o gerenciamento de rotas (SPA).