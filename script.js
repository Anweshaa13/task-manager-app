let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

const list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

const span=document.createElement("span");
span.textContent=task.text;

if(task.completed){
span.classList.add("completed");
}

span.onclick=()=>{
tasks[index].completed=!tasks[index].completed;
saveTasks();
renderTasks();
};

const delBtn=document.createElement("button");
delBtn.textContent="X";
delBtn.className="delete-btn";

delBtn.onclick=()=>{
tasks.splice(index,1);
saveTasks();
renderTasks();
};

li.appendChild(span);
li.appendChild(delBtn);

list.appendChild(li);

});

document.getElementById("taskCount").innerText = tasks.length + " Tasks";

}

function addTask(){

const input=document.getElementById("taskInput");

const text=input.value.trim();

if(text==="") return;

tasks.push({
text:text,
completed:false
});

saveTasks();
renderTasks();

input.value="";
}

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

document.getElementById("taskInput")
.addEventListener("keypress",function(e){
if(e.key==="Enter"){
addTask();
}
});

renderTasks();
