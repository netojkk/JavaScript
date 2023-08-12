
let jog1 = prompt('Me fale um número jogador1')
let j1 = parseInt(jog1)

let jog2 = prompt('Você também jogador 2')
let j2 = parseInt(jog2)

let res = parseInt(Math.random() * 2)

if (j1 == j2) {
    alert('Empate, tentem novamente.')
}
else {

    alert('O número sorteado foi: ' + res)

    if (res === 1 && j1 > j2) {

        alert('Parabéns!!! Você venceu, por colocar o maior número, jogador 1')
    } else if (res === 1 && j1 < j2) {
        alert('Parabéns!!! Você venceu, por colocar o maior número, jogador 2')
    } if (res === 0 && j1 < j2) {
        alert('Parabéns!!! Você venceu, por colocar o menor número, jogador 1')
    } else if (res === 0 && j1 > j2) {
        alert('Parabéns!!! Você venceu, por colocar o menor número, jogador 2')
    }

}
