//Selecionar apenas um elemento só//

const addUserText = document.querySelector("#add-user");
addUserText.innerHTML = "Adicionar Usuário";
const btn = document.querySelector('.btn')
//Selecionar Multiplos elementos//

const allItems = document.querySelectorAll(".items");

// MANIPULAÇÃO DE DOM //

// formas de remover chields!!

const items = document.querySelector(".item");
// items.remove() //tira todos os filhos pq ta indo na ul

// items.firstElementChild.remove() //primeiro filho removido
// items.lastElementChild.remove() // remove o ultimo

// items.children[1].textContent = 'Segundo Item' //modifica a propriedade do valor escolhido
// items.lastElementChild.innerHTML = '<h1>HELLO</h1>'; //muda o HTML do element selecionado

//MUDANDO O STYLE

// btn.style.background = 'purple'
// btn.style.color = 'pink'