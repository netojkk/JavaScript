const btn = document.querySelector('.btn')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

btn.addEventListener("click", function(e){
    e.preventDefault()

    const nameValue = nameInput.value
    const emailValue = emailInput.value

    if (nameValue === "" || emailValue === ""){
        alert('Preencha os campos')
    }else {
        alert('GREAT')
    }
})