// Aca escribiran su codigo
const inputToDo = document.getElementById('todoInput');
const buttonToDo = document.getElementById('addToDo');
const listTodo = buttonToDo.nextElementSibling;

const AddToDoTable = function () {
    let newRow = document.createElement('li');
    newRow.innerHTML = '<span><i class="fa fa-trash"></i></span>';
    newRow.appendChild(document.createTextNode(inputToDo.value))
    listTodo.appendChild(newRow);
    inputToDo.value = '';
}

// Eliminar el elemento
const deleteRow = function (event) {
    let row;

    if (event.target.tagName === 'SPAN') {
        row = event.target.parentElement;
    }

    if (event.target.tagName === 'I') {
        const rowSpan = event.target.parentElement;
        row = rowSpan.parentElement;
    }
    listTodo.removeChild(row);
}

inputToDo.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        AddToDoTable();
    }
});

listTodo.addEventListener('click', deleteRow);
buttonToDo.addEventListener('click', AddToDoTable);

// Creacion de funcion de crear Elemento
const createElement = function (nameTag, Properties, children) {
    let newElement = document.createElement(nameTag);
    for (const child of children) {
        newElement.appendChild(child)
    }
    console.log(newElement)
    return newElement;
}

const renderElement = function (element, whereRender) {
    whereRender.appendChild(element);
}

let elementTest = document.createElement('span');
elementTest.innerHTML = '<i class="fa fa-trash"> </i>';
let elmentTest2 = document.createTextNode('Elemento de prueba de funcion');

const createdItem = createElement('li', {}, [elementTest, elmentTest2]);
renderElement(createdItem, listTodo);
