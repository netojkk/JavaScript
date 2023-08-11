let amigo = {nome: 'José',
    sexo: 'M',
    peso: 60,
    engordar (p=0){
       console.log('Engordou')
       this.peso += p
}}

amigo.engordar(5)
console.log(`o ${amigo.nome} pesa ${amigo.peso} Kg`)