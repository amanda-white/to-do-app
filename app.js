function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');




addToDoForm.addEventListener('submit', () => {
  event.preventDefault();

deleteButton.addEventListener('click' () => {  
};








  // get the text
  let title = newToDoText.value;

  // create a new li
  let newLi = document.createElement('li');

  //  create a new input
  let checkbox = document.createElement('input');

  // create delete button
  let deleteButton = document.createElement('button');

 //add text to delete button
  deleteButton.innerHTML = "Delete";

  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // set the title
  newLi.textContent = title;

  // attach the checkbox to the li
  newLi.appendChild(checkbox);

  // attach delete button to the li
  newLi.appendChild(deleteButton);

  // attach the li to the ul
  toDoList.appendChild(newLi);

  //empty the input
  newToDoText.value = '';











});

}



window.onload = function () {
  onReady();
};
