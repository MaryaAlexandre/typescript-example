//Função para vê um quadrado de um número
export function quadradoFor( array : number []) : number [] {
  let resultado: number[] = [];
  for (let i = 0; i < array.length; i++){
    resultado.push(array[i] ** 2);
  }
  return resultado;
}

//Função para vê o quadrado para cada item do array
export function quadradoForEach(array : number []) : number []{
  let resultado: number[] = [];
  array.forEach((num : number) => {   
    resultado.push(num ** 2)
  });
  return resultado;
}

//Função aqui que concatena com espaço usando join
export function concatenarComEspaco(palavras : string[]) : string {
  return palavras.join(" ");
}

//Função para ordenar os elementos
export function ordenarElementos(array : string[]) : string [] {
  return array.sort();
}

//Fução para pegar os dois primerios numeros uma cópia
export function doisPrimeiros(array : number[]) : number [] {
  return array.slice(0,2);
}

//Função para filtrarPares ou seja vê se o número é par e retorna um array com os pares
export function filtrarPares(array : number[] ) : number [] {
  return array.filter(num => num % 2 === 0);
}