var now = new Date()
var hora = now.getHours()

if (hora <= 3) {
    console.log('Você ainda está acordado?? Por favor, regule seu sono')
}
 else if (hora < 11) {
    console.log('Bom dia')
} else if (hora <=17) {
    console.log('Boa tarde')
} else if (hora <= 23) {
    console.log ('Boa Noite')
} 