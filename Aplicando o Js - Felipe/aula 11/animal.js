class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} is very glad`)
    }
}
class Dogs extends Animal {
    constructor (name){
        super(name);
        
    }
    speak(){
        console.log(`${this.name} barked`)
    }

}

const animal = new Animal('Donatello')

const dog = new Dogs('Rontério')

dog.speak()
animal.speak()