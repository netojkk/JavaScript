const numbers = [1,2,3,4];

const numbersMultipliedByTwo = numbers.map(function(number){
    return number ** 2;
}); //cria uma nova lista baseada no pedido da function
    
console.log(numbersMultipliedByTwo);


const ages = [8,12,17,23,7, 3];

// const EvenAges = ages.filter(function(age){
//     return age % 2 === 0
// }); //cria uma nova lista baseada na funciton requisitada 

// console.log(EvenAges)


const sumOfAges = ages.reduce(function(age, accumulator) {
    return accumulator + age   

}, 0) //a função reduce serve para a redução de diversos valores, para apenas 1, nesse caso uma soma. Basicamente são necessarios 2 valores, 'age' e o accumulator, setamos um valor inicial fora das chaves, no caso o '0', e no return ele pega the age e pass for the accumulator and he stay lá, então o age passa para o next e a idade vai para o accumulator. Então age passa pelas idades e deixa dentro do accumulator, se tornando uma soma!

console.log(sumOfAges)