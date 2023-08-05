function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('div-res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('Preencha todos os campos, sem excessão!')
        
        res.innerHTML = '⬆ Preencha o campo que falta ⬆'

    }else {
        res.innerHTML = 'Contagem... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert(' passo em 0, consideramos = 1')
            p = 1
        }

        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c}👉🏻 `
        }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}👉🏻 `
            }
        }
        res.innerHTML += `🏴‍☠️`
    }
}