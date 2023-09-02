let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let submitbtn = document.querySelector('.btn')

const errorMessage = document.getElementById('#res')

submitbtn.addEventListener('click', (e) => {
   e.preventDefault() //previne erros de formulario sem rumo

   const nameValue = nameInput.value
   const emaiValue = emailInput.value

   if (nameValue === '' || emaiValue === ''){
        errorMessage.textContent = 'Preencha os cmapos'
   }else {
        errorMessage.textContent = 'Tudo ok!'
   }
})