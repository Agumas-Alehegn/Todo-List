let toDoList = [{name: 'go to school', dueDate: '2023-12-12'},{name: 'Watch Youtube', dueDate: '2023-12-12'}];
renderToDoList();
function renderToDoList(){
  let toDoListHTML = '';

  toDoList.forEach((toDoObject,index)=>{
    const{name, dueDate} = toDoObject;
    const html = `
     <input type="checkbox" class = "checkbox">
     <div>${name}</div>
     <div>${dueDate}</div>
     <button  class = "delete-todo-button js-delete-todo">
      Delete
    </button>
    `;
    toDoListHTML+= html;
  });
  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
  document.querySelectorAll('.js-delete-todo').forEach((deleteButton,index)=>{deleteButton.addEventListener('click', ()=>{
    toDoList.splice(index, 1);
    renderToDoList();
    });
  })
  }
 
  document.querySelector('.js-addTodo')
  .addEventListener('click', ()=>{
    addtoDo();
  })

 
 
function addtoDo(){
  const InputElement = document.querySelector('.js-name-input'); 
  const name = InputElement.value;
  const dueDateInputElement =document.querySelector('.js-due-date-input')
  const dueDate =  dueDateInputElement.value;
  
  toDoList.push(
  {
  // name:name,
  //dueDate:dueDate
  name,
  dueDate
  } );
  InputElement.value = '';
  renderToDoList();
}

document.querySelector('.js-addTodos').addEventListener('click',()=>{
  
})
 
function multipleAddToDo(){
  let toDoList = [{name: 'go to school', dueDate: '2023-12-12'},{name: 'Watch Youtube', dueDate: '2023-12-12'}];
renderToDoList();
function renderToDoList(){
  let toDoListHTML = '';

  toDoList.forEach((toDoObject,index)=>{
    const{name, dueDate} = toDoObject;
    const html = `
     <input type="checkbox" class = "checkbox">
     <div>${name}</div>
     <div>${dueDate}</div>
     <button  class = "delete-todo-button js-delete-todo">
      Delete
    </button>
    `;
    toDoListHTML+= html;
  });
  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
  document.querySelectorAll('.js-delete-todo').forEach((deleteButton,index)=>{deleteButton.addEventListener('click', ()=>{
    toDoList.splice(index, 1);
    renderToDoList();
    });
  })
  }
 
  document.querySelector('.js-addTodo')
  .addEventListener('click', ()=>{
    addtoDo();
  })

 
 
function addtoDo(){
  const InputElement = document.querySelector('.js-name-input'); 
  const name = InputElement.value;
  const dueDateInputElement =document.querySelector('.js-due-date-input')
  const dueDate =  dueDateInputElement.value;
  
  toDoList.push(
  {
  // name:name,
  //dueDate:dueDate
  name,
  dueDate
  } );
  InputElement.value = '';
  renderToDoList();
}

}