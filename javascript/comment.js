const container = document.querySelector('.feed');
var inputValue = document.querySelector('.input');
var total = document.getElementById('total')
const add = document.querySelector('.add');

if (window.localStorage.getItem("todos") == undefined) {
  var todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


//Item create kiya hai yaha pe
class item {
  constructor(name) {
    this.createItem(name);
  }
  createItem(name) {
    var itemBox = document.createElement('div');
    itemBox.classList.add('item');

    var input1 = document.createElement('span');
    input1.classList.add('baxa')

    var cimg = document.createElement('div');
    cimg.classList.add('cimg');
    // var limg = document.createElement('div');
    // limg.classList.add('limg');
    var icon = document.createElement('div');
    icon.classList.add('icon');
    
    var input = document.createElement('textarea');
    input.disabled = true;
    input.value = name;
    input.classList.add('item_input');


    // appending

    container.appendChild(itemBox);
    itemBox.appendChild(input1);
    input1.appendChild(cimg);
    cimg.appendChild(icon);
    input1.appendChild(input);
  }
}
add.addEventListener('click', check);
function check() {
  if (inputValue.value != "") {
    new item(inputValue.value);
    todos.push(inputValue.value);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    inputValue.value = "";
  }
}

// for (var v = 0; v < todos.length; v++) {
//     new item(todos[v]);
// }
