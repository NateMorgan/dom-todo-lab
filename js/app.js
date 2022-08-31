const textInput = document.getElementById('input-text')
const submitButton = document.getElementById('submit-button')
const toDoList = document.getElementById('todo-list')
const resetButton = document.getElementById(`reset-button`)

submitButton.addEventListener('click', function(){
  if (textInput.value.length > 0) {
    document.body.style.background = "#000000"
    let newToDo = document.createElement(`li`)
    newToDo.textContent = textInput.value
    // newToDo.addEventListener('click', function(){
    //   newToDo.remove()
    // })
    toDoList.appendChild(newToDo)
    textInput.value = ""
    
  } else {
    document.body.style.background = "url(https://media0.giphy.com/media/1154CgmtPPa4lq/200.gif)"
  }
})

resetButton.addEventListener('click',function (){
  toDoList.innerHTML = ""
  document.body.style.background = "#000000"
})

toDoList.addEventListener('click', function(evt){
  evt.target.remove()
})


