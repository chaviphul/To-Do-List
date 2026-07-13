function updateTotal() {
    total.innerHTML = task.length;
}

function updateCompletedandPending() {
    let count = 0;
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            count++;
        }
    }
    completed.innerHTML = count;
    pending.innerHTML = task.length - count;
}

function renderTasks(){
    main.innerHTML="";
    for(let i=0; i<tasks.length; i++){
        main.innerHTML = main.innerHTML + `<div class="task">
                <input type="checkbox" class="checkbox">
                <p>${tasks[i]}</p>
                <button type="button" class="deletebtn"><i class="fa-solid fa-trash-can"></i></button>
            </div>`
    }
    updateTotal();
    updateCompletedandPending();
}

function updateTasks(text){
    for(let i=0; i<tasks.length; i++){
        if(text == tasks[i]){
            tasks.splice(i,1);
        }
    }
}




let addtask = document.getElementById("addtask");
let nexttask = document.getElementById("nexttask");
let main = document.getElementById("main");
let task = document.getElementsByClassName("task");
let total = document.getElementById("total");
let completed = document.getElementById("completed");
let pending = document.getElementById("pending");
let checkbox = document.getElementsByClassName("checkbox");


let tasks=[];
tasks=JSON.parse(localStorage.getItem("tasks"));
if(tasks==null){
    tasks=[];
}

renderTasks();



addtask.onclick = function () {
    if (nexttask.value.trim() != "") {
        tasks.push(nexttask.value);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        renderTasks();
        nexttask.value = "";

    }
}




main.onclick = function (event) {
    let btn = event.target.closest(".deletebtn");
    if (btn) {
        let this_task = btn.closest(".task");
        let paragraph = this_task.querySelector("p");
        let text = paragraph.textContent;
        updateTasks(text);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        renderTasks();
    }

    if (event.target.classList.contains("checkbox")) {
        updateCompletedandPending();
    }
}

nexttask.onkeydown = function (event) {
    if (event.key == "Enter") {
        addtask.onclick();
    }
}










