class Person {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
    getAge(){
        console.log(`${this.age}`)
    }
    
}

const person = new Person ("Xico", "Assis", 17)

person.getFullName()

person.getAge()

