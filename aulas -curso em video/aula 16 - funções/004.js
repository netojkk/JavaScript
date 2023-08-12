//Função para cálculo e fatoração de um número.
function fatoriar(x){
    let fat = 1
    for (let c = x; c > 1; c--){
        fat *= c
    }   
    return fat
}
console.log(fatoriar(5))


// 5! = 5 x 4 x 3 x 2 x 1