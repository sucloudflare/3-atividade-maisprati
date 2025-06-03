// =============================
// Seção 1: Estruturas de Controle Avançadas
// =============================

// 1. Validação de Datas
function ehDataValida(dia, mes, ano) {
  const mesesCom31 = [1, 3, 5, 7, 8, 10, 12];
  const mesesCom30 = [4, 6, 9, 11];

  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

  if (mesesCom31.includes(mes)) return dia <= 31;
  if (mesesCom30.includes(mes)) return dia <= 30;

  // Fevereiro (verifica ano bissexto)
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  return dia <= (bissexto ? 29 : 28);
}

// 2. Jogo de Adivinhação
function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa;
  let tentativas = 0;

  while (tentativa !== numeroSecreto) {
    tentativa = parseInt(prompt("Adivinhe o número de 1 a 100:"));
    tentativas++;
    if (tentativa < numeroSecreto) {
      alert("Mais alto!");
    } else if (tentativa > numeroSecreto) {
      alert("Mais baixo!");
    } else {
      alert(`Acertou em ${tentativas} tentativas!`);
    }
  }
}

// 3. Palavras Únicas
function palavrasUnicas(str) {
  const palavras = str.split(" ");
  const unicas = [];
  for (let i = 0; i < palavras.length; i++) {
    if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
  return unicas;
}

// =============================
// Seção 2: Funções e Recursão
// =============================

// 4. Fatorial Recursivo
function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para n < 0");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// 5. Debounce
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 6. Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) {
      return cache[chave];
    }
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

// =============================
// Seção 3: Arrays e Objetos Complexos
// =============================

// 7. Mapeamento e Ordenação
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(prod => prod.nome);
}

// 8. Agrupamento por Propriedade
function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

// 9. Conversão Entre Formatos
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}
