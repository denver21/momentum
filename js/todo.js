const toDoForm = document.querySelector("#todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    let indexOfLi;
    console.log(toDos);
    for(let i = 0; i < toDos.length; i++){
        if(li===toDoList.children[i]){
            indexOfLi = i;
            console.log(i);
        }
    }
    toDos.splice(indexOfLi, 1);        
    /*li가 toDoList의 몇번째 child인지 i에 저장 후 toDos의 index i의 값을 제거*/
    li.remove();
    saveToDos();
}

function paintToDo(newToDo){
    const listMember = document.createElement("li");
    const listSpan = document.createElement("span");
    listSpan.innerText = newToDo;
    const listButton = document.createElement("button");
    listButton.innerText = "X";
    listButton.addEventListener("click", deleteToDo);
    listMember.appendChild(listSpan);
    listMember.appendChild(listButton);
    toDoList.appendChild(listMember);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const todosItem = JSON.parse(localStorage.getItem("todos"));
const toDoLength = todosItem.length;
for(let i = 0;i < toDoLength; i++){
    toDos.push(todosItem[i]);
    paintToDo(todosItem[i]);
}
saveToDos();