let names = ['Felipe', 'João', 'Maria', false, 23];
let João = names [1];

names.push('Roberto') //adiciona no final
names.unshift('Gigi') // adiciona no começo

names.pop();
names.pop();
names.pop(); //remove o ultimo valor

names[3] = 'Neto' //alteração de um valor especifico

const indexOfNeto = console.log(names.indexOf('Neto')); //encontrar a posição do valor

const sortName = names.sort(); // transforma em lista

const nameIsArray = Array.isArray(names) //Verificar se é uma lista ou array

console.log(names)
console.log(names.length) // mostra a quantidade de valores dentro do array 
console.log(names)