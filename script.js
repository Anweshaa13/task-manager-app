let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
const list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");
li.textContent=task;

const delBtn=document.createElement("button");
delBtn.textContent="Delete";

delBtn.onclick=()=>{
tasks.splice(index,1);
saveTasks();
renderTasks();
};

li.appendChild(delBtn);
list.appendChild(li);

});
}

function addTask(){

const input=document.getElementById("taskInput");
const task=input.value.trim();

if(task==="") return;

tasks.push(task);

saveTasks();
renderTasks();

input.value="";
}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

renderTasks();
