const todos = [
    {
        id: 1,
        description: 'estuding programming',
        isCompleted: false,
    },
    {
        id:2,
        description:'ler',
        isCompletede: false
    },
    {
        id:3,
        description:'playing',
        isCompleted:true,
    }

]

const lastId = todos[2].description
// console.log(lastId)

// ----------------------------------------
//JSON
const tudusJSON = JSON.stringify(todos) 
const listJSON = JSON.parse(tudusJSON)

console.log(listJSON)