const person = {
    firstName: 'Neto',
    LastName: 'Assis',
    age: 17,
    hobbies: ['Play the Pc', 'listening songs', 'watching shows'],
    dog: {
        name: 'Salsicha',
        age: 2 //colocando objeto dentro de outro objeto
    },
}//Objeto com diversos valores dentro 

// const firstName = person.firstName;
// const LastName = person.LastName;
// const age = person.age;
// const hobbies = person.hobbies

const {firstName: firstN, LastName,age,hobbies, dog: { name: dogName}} = person // forma de acessar os valores do objeto e transforma-lós em consts individuais.

const read = person.hobbies[1] //acessei a informação que eu queria dentro de outro e a add a other valure.

console.log(firstN)
console.log(LastName)
console.log(age)
console.log(hobbies)

// person.dog = 'Salsicha' //forma de adicionar outra propriedade a um objeto

console.log(person)
console.log(dogName)