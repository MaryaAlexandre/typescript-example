import {
  quadradoForEach,
  quadradoFor,
  concatenarComEspaco,
  ordenarElementos,
  doisPrimeiros,
  filtrarPares,
} from './funcoes';

describe('Funções utilitárias', () => { 
  const  numeros = [3,5,7,3,8,9,1];
  const palavras = ['Arrays', 'com', 'TypeScript'];
  const elementos = ['carro', 'boneco', 'ave', 'lapis'];
  const num2 = [2,4,6,2,8,9,5];
  const num3 =  [8, 3, 9, 5, 6, 12];

  test('QuadradoFor deve retorna o quadrado dos elementos', () => {
    expect(quadradoFor(numeros)).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });
  test('QuadradoForEach deve retornar o quadrado para cada elemento', () => {
    expect(quadradoForEach(numeros)).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });
  test('Concatenar com espaço usando join',() => {
    expect(concatenarComEspaco(palavras)).toBe('Arrays com TypeScript');
  });
  test('Ordenar elementos do array', () => {
    expect(ordenarElementos(elementos)).toEqual(['ave', 'boneco', 'carro', 'lapis']);
  });
  test('Dois primeiros numeros de um array', () => {
    expect(doisPrimeiros(num2)).toEqual([2, 4]);
  });
  test('filtrar pares de um array', () => {
    expect(filtrarPares(num3)).toEqual([8, 6, 12]);
  });
});







