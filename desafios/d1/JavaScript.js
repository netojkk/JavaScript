function carregar() {
    
    var msg = window.document.getElementById('texto')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()
    
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são exatamente ${hora} e ${minutos} horas.`

    // IMAGENS

    if (hora >= 0 && hora <= 12){
        // BOM DIA
        img.src = 'imagens/img-manha.png'
        document.body.style.background = '#B4A097'
    } 
    else if (hora >= 13 && hora <= 17){
        // BOA TARDE
        img.src = 'imagens/img-tarde.png'
        document.body.style.background = '#8195AE'
    } 
    else {
        img.src = 'imagens/img-noite.png'
        document.body.style.background = '#232228'
    }
}

