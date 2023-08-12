let num = [4 , 1 , 6]
num.sort()
  num.push(10)
// console.log(`${num} são ${num.length}  elementos`)
// console.log(`O primeiro valor é ${num[0]}` )

/*
    PRIMEIRA FORMA
 for (let pos = 0; pos<num.length; pos++  ){
    console.log(`A posição ${pos} tem o número ${num[pos]}`)

 }
*/
for( let pos in num){
    console.log(`A posição ${pos} tem o número ${num[pos]}`)
}

let pos = num.indexOf(1)
if (pos == -1){
    console.log(`Não encontramos esse valor.`)
}else {
console.log(`O valor está na posição ${pos}`)
}