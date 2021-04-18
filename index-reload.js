const btn = document.querySelector('.todo-submit')
const deleteAll = document.querySelector('.todo-delete-all')
const addToLocalStorage = document.querySelector('.todos-save-to-ls')
const deleteFromLocalStorage = document.querySelector('.todos-delete-from-ls')
const input = document.querySelector('input')
const todoContainer = document.querySelector('.todo-container')
// let todosToSave = []
let clickCounter = 0
const regex = /\\|\]|\"|\[/gm
let storedTodos = localStorage.getItem('storedTodoList')
  ? localStorage.getItem('storedTodoList').replace(regex, '').split(',')
  : []

const onReload = () => {
  for (let todo of storedTodos) {
    const div = document.createElement('div')
    const btnDiv = document.createElement('div')
    const todoText = document.createElement('div')
    const deleteBtn = document.createElement('button')
    const completeBtn = document.createElement('button')

    div.classList.add('todo-item')
    // btnDiv.classList.add('btn-div')
    todoText.classList.add('todo-text')
    clickCounter++
    console.log(todo)
    todoText.innerText = todo

    deleteBtn.innerText = 'Delete'
    completeBtn.innerText = 'Completed'
    //shades of blue and purple
    const todoColorRed = Math.floor((Math.random() * 255) / 2)
    const todoColorGreen = Math.floor((Math.random() * 255) / 2)
    const todoColorBlue = Math.floor((Math.random() * 255) / 2)

    if (clickCounter % 2 === 0) {
      div.style.backgroundColor = `rgb(${todoColorRed}, ${todoColorGreen}, 255)`
    } else {
      div.style.backgroundColor = `rgb(255, ${todoColorGreen}, ${todoColorBlue})`
    }

    document.body.append(div)
    document.body.append(div)
    btnDiv.append(completeBtn)
    btnDiv.append(deleteBtn)
    div.append(todoText)
    div.append(btnDiv)

    deleteBtn.addEventListener('click', e => {
      e.target.parentElement.parentElement.remove()
    })

    completeBtn.addEventListener('click', e => {
      e.target.parentElement.parentElement.classList.add('todo-text-completed')
    })
  }
}
onReload()

todoContainer.addEventListener('click', e => {
  e.preventDefault()

  if (input.value !== '' && e.target.className === 'todo-submit') {
    clickCounter++
    const div = document.createElement('div')
    const btnDiv = document.createElement('div')
    const todoText = document.createElement('div')
    const deleteBtn = document.createElement('button')
    const completeBtn = document.createElement('button')

    div.classList.add('todo-item')
    // btnDiv.classList.add('btn-div')
    todoText.classList.add('todo-text')

    todoText.innerText = input.value
    storedTodos.push(input.value)

    deleteBtn.innerText = 'Delete'
    completeBtn.innerText = 'Completed'
    //shades of blue and purple
    const todoColorRed = Math.floor((Math.random() * 255) / 2)
    const todoColorGreen = Math.floor((Math.random() * 255) / 2)
    const todoColorBlue = Math.floor((Math.random() * 255) / 2)

    if (clickCounter % 2 === 0) {
      div.style.backgroundColor = `rgb(${todoColorRed}, ${todoColorGreen}, 255)`
    } else {
      div.style.backgroundColor = `rgb(255, ${todoColorGreen}, ${todoColorBlue})`
    }

    document.body.append(div)
    document.body.append(div)
    btnDiv.append(completeBtn)
    btnDiv.append(deleteBtn)
    div.append(todoText)
    div.append(btnDiv)

    input.value = ''

    deleteBtn.addEventListener('click', e => {
      e.target.parentElement.parentElement.remove()
    })

    completeBtn.addEventListener('click', e => {
      e.target.parentElement.parentElement.classList.add('todo-text-completed')
    })
  }
})

deleteAll.addEventListener('click', e => {
  e.preventDefault()
  const allTodos = document.querySelectorAll('.todo-item')
  allTodos.forEach(elem => {
    elem.remove()
  })
  storedTodos = []
})

addToLocalStorage.addEventListener('click', e => {
  e.preventDefault()
  localStorage.setItem('storedTodoList', JSON.stringify(storedTodos))
})

deleteFromLocalStorage.addEventListener('click', e => {
  e.preventDefault()
  localStorage.removeItem('storedTodoList')
})
