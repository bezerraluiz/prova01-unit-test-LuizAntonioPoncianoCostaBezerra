const Utilitarios = require('../src/utilitarios');

describe('Utilitarios', () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  describe('Métodos de manipulação de string', () => {
    test('deve inverter string', () => {
      expect(utilitarios.inverterString('hello')).toBe('olleh');
      expect(utilitarios.inverterString('')).toBe('');
    });

    test('deve contar caracteres', () => {
      expect(utilitarios.contarCaracteres('hello')).toBe(5);
      expect(utilitarios.contarCaracteres('')).toBe(0);
    });

    test('deve converter para maiúsculas e minúsculas', () => {
      expect(utilitarios.paraMaiusculas('hello')).toBe('HELLO');
      expect(utilitarios.paraMinusculas('HELLO')).toBe('hello');
    });

    test('deve capitalizar primeira letra', () => {
      expect(utilitarios.primeiraLetraMaiuscula('hello')).toBe('Hello');
      expect(utilitarios.primeiraLetraMaiuscula('')).toBe('');
    });

    test('deve remover espaços e repetir texto', () => {
      expect(utilitarios.removerEspacos('  hello  ')).toBe('hello');
      expect(utilitarios.repetirTexto('hi', 3)).toBe('hihihi');
    });

    test('deve contar palavras', () => {
      expect(utilitarios.contarPalavras('hello world')).toBe(2);
      expect(utilitarios.contarPalavras('  hello   world  ')).toBe(2);
    });

    test('deve identificar palíndromo', () => {
      expect(utilitarios.ehPalindromo('aba')).toBe(true);
      expect(utilitarios.ehPalindromo('hello')).toBe(false);
      expect(utilitarios.ehPalindromo('A man, a plan, a canal: Panama!')).toBe(true);
    });
  });

  describe('Métodos de cálculo matemático', () => {
    test('deve realizar operações básicas', () => {
      expect(utilitarios.somar(2, 3)).toBe(5);
      expect(utilitarios.subtrair(5, 3)).toBe(2);
      expect(utilitarios.multiplicar(3, 4)).toBe(12);
      expect(utilitarios.dividir(10, 2)).toBe(5);
    });

    test('deve lidar com casos especiais de divisão', () => {
      expect(() => utilitarios.dividir(10, 0)).toThrow('Divisão por zero');
      expect(utilitarios.dividir(7, 2)).toBe(3.5);
    });

    test('deve identificar números pares', () => {
      expect(utilitarios.ehPar(4)).toBe(true);
      expect(utilitarios.ehPar(5)).toBe(false);
      expect(utilitarios.ehPar(0)).toBe(true);
    });

    test('deve validar se é número', () => {
      expect(utilitarios.ehNumero(5)).toBe(true);
      expect(utilitarios.ehNumero('5')).toBe(false);
      expect(utilitarios.ehNumero(NaN)).toBe(false);
    });

    test('deve calcular média de array', () => {
      expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toBe(3);
      expect(utilitarios.mediaArray([])).toBe(0);
    });
  });

  describe('Métodos de manipulação de array', () => {
    test('deve acessar primeiro e último elemento', () => {
      expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
      expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
      expect(utilitarios.primeiroElemento([])).toBeUndefined();
    });

    test('deve retornar tamanho do array', () => {
      expect(utilitarios.tamanhoArray([1, 2, 3, 4])).toBe(4);
      expect(utilitarios.tamanhoArray([])).toBe(0);
    });

    test('deve ordenar e inverter arrays', () => {
      expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
      expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('deve juntar elementos do array', () => {
      expect(utilitarios.juntarArray([1, 2, 3])).toBe('1,2,3');
      expect(utilitarios.juntarArray(['a', 'b', 'c'], ' - ')).toBe('a - b - c');
    });

    test('deve remover duplicados', () => {
      expect(utilitarios.removerDuplicados([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('Métodos utilitários diversos', () => {
    test('deve gerar número aleatório', () => {
      const numero = utilitarios.gerarNumeroAleatorio(50);
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThan(50);
      expect(Number.isInteger(numero)).toBe(true);
    });

    test('deve mesclar objetos', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
      
      const obj3 = { a: 1, b: 2 };
      const obj4 = { b: 3, c: 4 };
      expect(utilitarios.mesclarObjetos(obj3, obj4)).toEqual({ a: 1, b: 3, c: 4 });
    });
  });
});