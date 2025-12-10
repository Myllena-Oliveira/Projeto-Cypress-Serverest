# Projeto Cypress - Automação E2E e API

## ✅ Descrição
Este projeto contém testes automatizados para:
- **Frontend**: https://front.serverest.dev/
- **API**: https://serverest.dev/

## 📋 Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- Java JDK (para relatórios Allure)

## 🚀 Instalação
Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração
**Nenhuma configuração adicional necessária!** 🎉

Todos os testes utilizam **dados dinâmicos** gerados automaticamente:
- Usuários criados com `Date.now()` para garantir unicidade
- Nomes e senhas aleatórios gerados por funções helper
- Não requer credenciais fixas ou variáveis de ambiente

## 📂 Estrutura do Projeto
```
cypress/
├── e2e/                              # Testes End-to-End
│   ├── api/                          # Testes de API (Cypress puro)
│   │   ├── criarUsuario.cy.js
│   │   ├── listarProdutos.cy.js
│   │   └── loginApi.cy.js
│   ├── frontend/                     # Testes de Interface (Cypress puro)
│   │   ├── cadastro.cy.js
│   │   ├── login.cy.js
│   │   └── produtos.cy.js
│   └── bdd/                          # Testes BDD com Cucumber
│       ├── features/                 # Arquivos .feature (Gherkin)
│       │   ├── api-criar-usuario.feature
│       │   ├── api-listar-produtos.feature
│       │   ├── api-login.feature
│       │   ├── cadastro.feature
│       │   ├── login.feature
│       │   └── produtos.feature
│       └── step_definitions/         # Implementação dos steps
│           ├── auth.steps.js
│           ├── cadastro.steps.js
│           ├── common.steps.js
│           ├── login.steps.js
│           ├── produto.steps.js
│           ├── produtos-frontend.steps.js
│           └── usuario.steps.js
├── fixtures/                         # Dados de teste (JSON)
│   ├── usuarios.json
│   └── produtos.json
├── support/                          # Arquivos de suporte
│   ├── commands/                     # Custom commands
│   │   └── index.js
│   ├── pages/                        # Page Objects
│   │   ├── cadastroPage.js
│   │   └── loginPage.js
│   ├── helpers/                      # Funções utilitárias
│   │   └── index.js
│   └── e2e.js                        # Setup global
└── screenshots/                      # Screenshots de falhas
```

## ▶️ Como Executar os Testes

### Executar todos os testes (modo headless)
```bash
npx cypress run
```

### Executar apenas testes de frontend
```bash
npm run test:e2e
```

### Executar apenas testes de API
```bash
npm run test:api
```

### Executar apenas testes Cucumber (BDD)
```bash
npm run test:bdd
```

### Abrir interface gráfica do Cypress
```bash
npx cypress open
```

### Executar um arquivo específico
```bash
# Teste API
npx cypress run --spec "cypress/e2e/api/loginApi.cy.js"

# Teste Frontend
npx cypress run --spec "cypress/e2e/frontend/login.cy.js"

# Teste BDD/Cucumber
npx cypress run --spec "cypress/e2e/bdd/features/login.feature"
```

## 📊 Relatórios Allure

Este projeto está configurado com Allure Reports para visualização detalhada dos resultados.

### Gerar e visualizar relatório
Após executar os testes, gere o relatório com:
```bash
npx allure serve allure-results
```
Este comando irá:
- Gerar o relatório HTML automaticamente
- Abrir o relatório no navegador padrão

### Gerar relatório sem abrir automaticamente
```bash
npx allure generate allure-results --clean -o allure-report
```

### Abrir relatório existente
```bash
npx allure open allure-report
```

## 🛠️ Tecnologias Utilizadas
- **Cypress 13.17.0** - Framework de testes E2E e API
- **Cucumber (BDD)** - Testes em linguagem natural com Gherkin
- **@badeball/cypress-cucumber-preprocessor** - Integração Cypress + Cucumber
- **@shelex/cypress-allure-plugin** - Plugin para integração com Allure Reports
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Page Object Pattern** - Padrão de organização de código
- **Custom Commands** - Comandos reutilizáveis com fixtures
- **Helpers** - Funções utilitárias centralizadas

## ✨ Recursos e Otimizações

### 🎯 Custom Commands
O projeto utiliza comandos customizados para reutilização de código:
- `cy.criarUsuarioAPI()` - Cria usuário via API com dados únicos
- `cy.loginAPI()` - Realiza login e retorna token
- `cy.criarELogarAPI()` - Cria usuário e faz login (API)
- `cy.criarELogarFrontend()` - Cria usuário e faz login (UI)
- `cy.listarProdutosAPI()` - Lista produtos via API
- `cy.loginComCache()` - Login com cache usando cy.session() para performance

### 📦 Fixtures
Dados de teste centralizados em `cypress/fixtures/`:
- `usuarios.json` - Templates de usuários (admin, comum, inválidos)
- `produtos.json` - Templates de produtos

### 🔧 Helpers
Funções utilitárias em `cypress/support/helpers/`:
- `gerarEmailUnico()` - Gera emails únicos para testes
- `gerarNomeAleatorio()` - Gera nomes aleatórios
- `gerarSenhaAleatoria()` - Gera senhas seguras
- `formatarPreco()` - Formata valores monetários
- `removerAcentos()` - Remove acentuação de strings

### 🎨 Page Objects
Padrão Page Object implementado com:
- Getters para elementos
- Métodos de ação (fillEmail, submit, etc)
- Métodos compostos (login, cadastrar)
- Validações integradas (deveEstarNaHome, deveExibirMensagemErro)
- Fluent interface (encadeamento de métodos)

## 🥒 Testes BDD com Cucumber

Este projeto suporta testes escritos em Gherkin (linguagem natural) usando Cucumber.

### Estrutura Cucumber:
- **Features** (`cypress/e2e/bdd/features/`): Cenários escritos em Gherkin
- **Step Definitions** (`cypress/e2e/bdd/step_definitions/`): Implementação dos passos

### Exemplo de Feature:
```gherkin
# language: pt
Funcionalidade: Login de Usuário

  Cenário: Validar login com credenciais válidas
    Dado que estou na página de login
    E possuir um cadastro ativo
    Quando preencher os campos de "E-mail" e "Senha" com dados válidos
    E clicar no botão "Entrar"
    Então devo ser redirecionado para a home
```

### Vantagens do BDD:
- Cenários em linguagem natural (português)
- Facilita comunicação com stakeholders não-técnicos
- Reutilização de steps entre cenários
- Documentação viva dos requisitos
- Steps compartilhados entre testes API e Frontend

## 📊 Resultados dos Testes

### Cobertura Atual:
- ✅ **API Tests**: 7/7 passing (100%)
  - Criar usuário (3 testes)
  - Listar produtos (2 testes)
  - Login API (2 testes)

- ✅ **Frontend Tests**: 4/4 passing (100%)
  - Cadastro de usuário (1 teste)
  - Login (2 testes)
  - Produtos/Carrinho (1 teste)

- ✅ **BDD Tests**: 6/6 passing (100%)
  - API: criar usuário, listar produtos, login
  - Frontend: cadastro, login, produtos

**Total: 17/17 testes passando (100%)**

## 📝 Notas
- Os resultados dos testes são salvos em `allure-results/`
- Screenshots de falhas são salvos em `cypress/screenshots/`
- Certifique-se de ter o Java instalado para usar o Allure
