function calc(){
    var num = document.getElementById('tnum')
    var tab = document.getElementById('seltab')
   
    if (num.value.length == 0){
        alert('Insira um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} é = ${n*c}`
            tab.appendChild (item)
        }
    }
}