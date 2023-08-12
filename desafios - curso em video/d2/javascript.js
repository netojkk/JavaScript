function ver() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('tdata')
    var res = document.getElementById('resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano){
    
        window.alert('[ERRO] Verifique as suas informações e tente novamente')  

   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            
            genero = 'um Homem'
            document.body.style.background = 'rgb(118, 196, 199)'

            if (idade >= 0 && idade <= 10){
                genero = 'um menino'
                img.setAttribute('src', 'criança-m.jpg')
                
                
                //Crianca
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-m.jpg')
                
                //jovem
            }else if (idade < 50){
                img.setAttribute('src', 'adulto-m.jpg')
                
                //adulto
            }else {
                img.setAttribute('src', 'velho-m.jpg')
                //idoso
            }
            
            
            
        }else if(fsex[1].checked) {
            genero = 'uma Mulher'
            document.body.style.background = 'rgb(255, 192, 203)'
            if (idade >= 0 && idade <= 10){ 
                
                genero = 'uma menina'
                img.setAttribute('src','criança-f.jpg')

                //kid
            }else if (idade < 22 ){
                img.setAttribute('src', 'jovem-f.jpg')
                //jovem
            }else if (idade < 50 ){
                img.setAttribute('src', 'adulto-f.jpg')
                //adulta
            }else {
                img.setAttribute('src', 'velho-f.jpg')
                //velha
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `É ${genero} com ${idade} anos`
        res.appendChild(img)
   
}}