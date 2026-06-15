const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {

    const text = taskInput.value.trim();

    if(text === ""){
        alert("Enter a task");
        return;
    }

    createTask(text,false);

    saveTasks();

    taskInput.value = "";
}

function createTask(text,completed){

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text;
    span.className = "task-text";

    if(completed){
        span.classList.add("completed");
    }

    span.addEventListener("click",function(){

        span.classList.toggle("completed");

        saveTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click",function(){

        li.remove();

        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);
}

function saveTasks(){

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li=>{

        const span = li.querySelector("span");

        tasks.push({
            text: span.innerText,
            completed: span.classList.contains("completed")
        });

    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadTasks(){

    taskList.innerHTML = "";

    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task=>{

        createTask(task.text,task.completed);

    });
}