let num = document.querySelector('#tnum') 
//Numero do input
let list = document.querySelector('#list')
//sicronizaçao com a lista
let res = document.querySelector('.div-res')

let array = []
//valores do array

function isNumero(número){
    if (Number(número) >=1 && Number(número) <= 100){
        return true 
    } else {
        return false
    } //Confirmação se é um número e se esse número está entre 1 a 100. 
}
function inLista(número, lista){
    if (lista.indexOf(Number(número)) != -1){
        return true
    }else {
        return false
    }
}

function add(){
    if(isNumero(num.value)  && !inLista(num.value, array)) {
        array.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value}`
        list.appendChild(item)

    } else {
        alert('[Erro] ')
    }
    num.value = ''
    num.focus()

}   
