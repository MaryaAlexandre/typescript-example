import {
  quadradoForEach,
  quadradoFor,
  concatenarComEspaco,
  ordenarElementos,
  doisPrimeiros,
  filtrarPares,
} from './funcoes';

const  numeros = [3,5,7,3,8,9,1];
console.log("Quadrado for:", quadradoFor(numeros));
console.log("QuadradoForEach:", quadradoForEach(numeros));

const palavras = ['Marya', 'Castelo', 'Banimento'];
console.log("Concatenado:",concatenarComEspaco(palavras));

const elementos = ['aviao', 'pesquisa', 'vassoura', 'aves'];
console.log("Ordenar elementos:", ordenarElementos(palavras));

const num2 = [1,6,7,8,9,10];
console.log("Dois Primeiros Números:", doisPrimeiros(num2));

const num3 = [2,4,7,8,10,3,9];
console.log("Filtrar Pares:", filtrarPares(num3));





