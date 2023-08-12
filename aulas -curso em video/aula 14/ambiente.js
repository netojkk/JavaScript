// console.log('Iniciando a contagem...')
// for (var c = 1;c <= 10;c++){
//     console.log(`Passo ${c}`)
// }
// console.log(`A contagem acabou pivete`)

let numberi = '100'
let numberm = '0'
let pulo = '10'

if (numberi.length == 0 || numberm.length == 0 || pulo.length == 0){
    console.log('Adicione um número')
}else {
    let  n= Number(numberi)
    let nu = Number(numberm)
    let p = Number(pulo)
    if(p = 0){
        console.log(`0 é foda, vai ficar 1`)
        p = 1
    }


    if (n < nu){
        for (let c = ni; c <= nu; c += p){
             console.log(`E contando: ${c}`)
    }}
     else if (n > nu) {
        for(let c = n; c >= nu; c-= p){
            console.log(`${c} `)
        
        }
}}
