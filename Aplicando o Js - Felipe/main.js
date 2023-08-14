class Person {
    constructor (firstName, lastName,age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
        
    }
    getFullName(){
        console.log(`${this.firstName}  ${this.lastName}`)
    }
    static speak (){
        console.log('Hello, World!')
    }
}

const person = new Person('Gigi', 'Assis', 19)

person.getFullName();

Person.speak()