const cars = ['cadillac', 'skyline', 'tesla']

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

//OU 

for (let car of cars){
    console.log(car)
} //Para cada carro na lista de carro, a gente mostra um carro

/*
cars.forEach(function(car, index){
    console.log(cars)
})
*/

//Versão loops de objetos

const person = {
    name: 'joana',
    age: 19,

}

for (property in person){
    console.log(person[property])
}