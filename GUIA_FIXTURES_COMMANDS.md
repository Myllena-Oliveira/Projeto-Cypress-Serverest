# Guia de Uso - Fixtures e Custom Commands

## 📁 Estrutura Criada

### Fixtures (Dados de Teste)
- `cypress/fixtures/usuarios.json` - Templates de usuários
- `cypress/fixtures/produtos.json` - Templates de produtos

### Custom Commands
- `cypress/support/commands.js` - Comandos reutilizáveis

---

## 🔧 Custom Commands Disponíveis

### 1. **criarUsuarioAPI(dadosUsuario)**
Cria um novo usuário via API com email único.

```javascript
// Uso básico - cria usuário com dados da fixture
cy.criarUsuarioAPI().then((usuario) => {
  cy.log(usuario.email); // teste_1234567890@qa.com.br
});

// Com dados customizados
cy.criarUsuarioAPI({
  nome: 'João Silva',
  administrador: 'false'
}).then((usuario) => {
  expect(usuario.nome).to.equal('João Silva');
});
```

### 2. **loginAPI(email, password)**
Faz login via API e retorna o token de autorização.

```javascript
cy.loginAPI('usuario@teste.com', 'senha123').then((token) => {
  cy.log(token); // Bearer abc123...
});
```

### 3. **criarELogarAPI(dadosUsuario)**
Cria um usuário e faz login automaticamente (retorna usuário + token).

```javascript
cy.criarELogarAPI().then((resultado) => {
  cy.log(resultado.usuario.email);
  cy.log(resultado.token);
});
```

### 4. **criarELogarFrontend(dadosUsuario)**
Cria um usuário via API e faz login na interface gráfica.

```javascript
it('deve acessar a home após login', () => {
  cy.criarELogarFrontend();
  cy.url().should('include', '/home');
});
```

### 5. **listarProdutosAPI()**
Lista todos os produtos disponíveis.

```javascript
cy.listarProdutosAPI().then((produtos) => {
  expect(produtos).to.be.an('array');
  cy.log(`Total de produtos: ${produtos.length}`);
});
```

---

## 📝 Exemplos de Uso nos Testes

### Teste de API - Criar Usuário

```javascript
describe('Criar Usuário', () => {
  it('deve criar usuário admin', () => {
    cy.criarUsuarioAPI({ administrador: 'true' }).then((usuario) => {
      expect(usuario.administrador).to.equal('true');
    });
  });
});
```

### Teste de API - Login

```javascript
describe('Login', () => {
  it('deve fazer login e obter token', () => {
    cy.criarELogarAPI().then((resultado) => {
      expect(resultado.token).to.not.be.empty;
    });
  });
});
```

### Teste Frontend - Login

```javascript
describe('Login Frontend', () => {
  it('deve fazer login com sucesso', () => {
    cy.criarELogarFrontend();
    cy.contains('Serverest Store').should('be.visible');
  });
});
```

### Usando Fixtures Diretamente

```javascript
it('deve criar usuário comum', () => {
  cy.fixture('usuarios').then((usuarios) => {
    cy.criarUsuarioAPI(usuarios.usuarioComum).then((usuario) => {
      expect(usuario.administrador).to.equal('false');
    });
  });
});
```

---

## ✅ Vantagens da Implementação

1. ✅ **Reutilização**: Comandos usados em múltiplos testes
2. ✅ **Manutenção**: Altere em um lugar, reflete em todos os testes
3. ✅ **Legibilidade**: Código mais limpo e fácil de entender
4. ✅ **Isolamento**: Cada teste tem seu próprio usuário único
5. ✅ **Flexibilidade**: Dados podem ser customizados por teste
6. ✅ **Organização**: Fixtures centralizam dados de teste

---

## 🚀 Como Executar os Testes

```bash
# Todos os testes
npx cypress run

# Testes de API
npm run test:api

# Testes de Frontend
npm run test:e2e

# Interface do Cypress
npx cypress open
```

---

## 📌 Observações Importantes

- Cada execução gera um email único usando `Date.now()`
- Os testes são independentes e podem rodar em qualquer ordem
- Não há mais dependência do arquivo `.env` para testes básicos
- Os dados das fixtures são apenas templates (base para criação)
