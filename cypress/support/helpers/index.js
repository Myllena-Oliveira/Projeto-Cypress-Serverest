/**
 * Funções helper para testes Cypress
 */

/**
 * Gera um email único para testes
 * @param {string} prefix - Prefixo do email (padrão: 'teste')
 * @param {string} domain - Domínio do email (padrão: '@qa.com.br')
 * @returns {string} - Email único
 */
export function gerarEmailUnico(prefix = 'teste', domain = '@qa.com.br') {
    return `${prefix}_${Date.now()}${domain}`;
}

/**
 * Gera um nome aleatório
 * @returns {string} - Nome aleatório
 */
export function gerarNomeAleatorio() {
    const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Julia', 'Lucas', 'Fernanda'];
    const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Costa', 'Almeida'];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return `${nome} ${sobrenome}`;
}

/**
 * Aguarda um tempo determinado
 * @param {number} ms - Milissegundos para aguardar
 */
export function aguardar(ms) {
    return cy.wait(ms);
}

/**
 * Gera senha aleatória
 * @param {number} length - Tamanho da senha (padrão: 8)
 * @returns {string} - Senha gerada
 */
export function gerarSenhaAleatoria(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let senha = '';
    for (let i = 0; i < length; i++) {
        senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return senha;
}

/**
 * Formata preço para exibição
 * @param {number} preco - Preço a ser formatado
 * @returns {string} - Preço formatado (ex: R$ 100,00)
 */
export function formatarPreco(preco) {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

/**
 * Remove acentos de uma string
 * @param {string} str - String com acentos
 * @returns {string} - String sem acentos
 */
export function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
