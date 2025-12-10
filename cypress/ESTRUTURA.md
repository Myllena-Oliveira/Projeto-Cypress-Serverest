#  Estrutura do Projeto Cypress

## Organização de Pastas

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

##  Como Usar

### Executar Testes de API
```bash
npm run test:api
```

### Executar Testes de Frontend
```bash
npm run test:e2e
```

### Executar Testes BDD (Cucumber)
```bash
npm run test:bdd
```

### Abrir Interface do Cypress
```bash
npx cypress open
```

##  Convenções

- **Testes Cypress**: Arquivos terminam com `.cy.js`
- **Features Cucumber**: Arquivos terminam com `.feature`
- **Step Definitions**: Arquivos terminam com `.steps.js`
- **Page Objects**: Classes que representam páginas
- **Fixtures**: Dados estáticos em JSON

## 📝 Custom Commands Disponíveis

- `cy.criarUsuarioAPI()` - Cria usuário via API (retorna { usuario, response })
- `cy.loginAPI()` - Faz login via API (retorna { token, response })
- `cy.criarELogarAPI()` - Cria usuário e faz login (API)
- `cy.criarELogarFrontend()` - Cria usuário e faz login (UI)
- `cy.listarProdutosAPI()` - Lista produtos via API (retorna response completo)
- `cy.loginComCache()` - Login com cache usando cy.session() para performance

## 🔧 Helpers Disponíveis

- `gerarEmailUnico()` - Gera emails únicos para testes
- `gerarNomeAleatorio()` - Gera nomes aleatórios
- `gerarSenhaAleatoria()` - Gera senhas seguras
- `formatarPreco()` - Formata valores monetários
- `removerAcentos()` - Remove acentuação de strings
- `cy.listarProdutosAPI()` - Lista produtos via API

Veja mais detalhes em `GUIA_FIXTURES_COMMANDS.md` na raiz do projeto.
