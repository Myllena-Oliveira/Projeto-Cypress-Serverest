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
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
CYPRESS_FRONT_EMAIL=seu_email@example.com
CYPRESS_FRONT_PASSWORD=sua_senha
CYPRESS_API_EMAIL=seu_email_api@example.com
CYPRESS_API_PASSWORD=sua_senha_api
```

## 📂 Estrutura do Projeto
```
cypress/
├── e2e/
│   ├── features/              # Arquivos Cucumber (.feature)
│   │   ├── login.feature
│   │   └── cadastro.feature
│   ├── step_definitions/      # Step Definitions (Cucumber)
│   │   ├── login.steps.js
│   │   └── cadastro.steps.js
│   ├── frontend/              # Testes E2E tradicionais
│   │   ├── cadastro.cy.js
│   │   ├── carrinho.cy.js
│   │   └── login.cy.js
│   └── api/                   # Testes de API
│       ├── criarUsuario.cy.js
│       ├── listarProdutos.cy.js
│       └── loginApi.cy.js
├── support/
│   ├── commands.js            # Comandos customizados
│   ├── e2e.js                # Configurações globais
│   └── pageObjects/          # Page Objects
│       ├── cadastroPage.js
│       └── loginPage.js
└── screenshots/               # Screenshots de falhas
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
npm run test:cucumber
```

### Abrir interface gráfica do Cypress
```bash
npx cypress open
```

### Executar um arquivo específico
```bash
# Teste tradicional
npx cypress run --spec "cypress/e2e/frontend/login.cy.js"

# Teste Cucumber
npx cypress run --spec "cypress/e2e/features/login.feature"
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
- **Cypress** - Framework de testes E2E e API
- **Cucumber (BDD)** - Testes em linguagem natural com Gherkin
- **@badeball/cypress-cucumber-preprocessor** - Integração Cypress + Cucumber
- **@shelex/cypress-allure-plugin** - Plugin para integração com Allure Reports
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Page Object Pattern** - Padrão de organização de código

## 🥒 Testes BDD com Cucumber

Este projeto suporta testes escritos em Gherkin (linguagem natural) usando Cucumber.

### Estrutura Cucumber:
- **Features** (`cypress/e2e/features/`): Cenários escritos em Gherkin
- **Step Definitions** (`cypress/e2e/step_definitions/`): Implementação dos passos

### Exemplo de Feature:
```gherkin
# language: pt
Funcionalidade: Login de Usuário

  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando eu preencho o email com dados válidos
    E eu preencho a senha com dados válidos
    E eu clico no botão de entrar
    Então devo ver a home da aplicação
```

### Vantagens do BDD:
- Cenários em linguagem natural (português)
- Facilita comunicação com stakeholders não-técnicos
- Reutilização de steps entre cenários
- Documentação viva dos requisitos

## 📝 Notas
- Os resultados dos testes são salvos em `allure-results/`
- Screenshots de falhas são salvos em `cypress/screenshots/`
- Certifique-se de ter o Java instalado para usar o Allure
