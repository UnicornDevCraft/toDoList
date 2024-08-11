const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("It seems that it's empty. Please add something more!")
    } else if(inputBox.value.length >= 200){
        alert("Please come up with a shorter description!")
    } 
    else{
        let taskList = document.querySelectorAll('li');
        if(taskList.length > 50){
            alert("To many tasks! Try completing or replacing some.")
        } else{
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = "\u00d7"
            li.appendChild(span);
        }    
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();