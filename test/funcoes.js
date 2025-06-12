"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quadradoFor = quadradoFor;
exports.quadradoForEach = quadradoForEach;
exports.concatenarComEspaco = concatenarComEspaco;
exports.ordenarElementos = ordenarElementos;
exports.doisPrimeiros = doisPrimeiros;
exports.filtrarPares = filtrarPares;
//Função para vê um quadrado de um número
function quadradoFor(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        resultado.push(Math.pow(array[i], 2));
    }
    return resultado;
}
//Função para vê o quadrado para cada item do array
function quadradoForEach(array) {
    var resultado = [];
    array.forEach(function (num) {
        resultado.push(Math.pow(num, 2));
    });
    return resultado;
}
//Função aqui que concatena com espaço usando join
function concatenarComEspaco(palavras) {
    return palavras.join(" ");
}
//Função para ordenar os elementos
function ordenarElementos(array) {
    return array.sort();
}
//Fução para pegar os dois primerios numeros uma cópia
function doisPrimeiros(array) {
    return array.slice(0, 2);
}
//Função para filtrarPares ou seja vê se o número é par e retorna um array com os pares
function filtrarPares(array) {
    return array.filter(function (num) { return num % 2 === 0; });
}
