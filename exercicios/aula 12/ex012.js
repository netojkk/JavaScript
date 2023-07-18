var idade = 66
console.log(`Você tem ${idade} anos`)
if (idade < 16 ) {
    console.log('não vota')
}else if (idade < 18 || idade >= 66) {
    console.log('voto OPCIONAL')

}else {
    console.log('voto OBRIGATÓRIO')
}
