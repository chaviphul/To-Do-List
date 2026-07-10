let addtask = document.getElementById("addtask");
let nexttask = document.getElementById("nexttask");
let main = document.getElementById("main");
let task = document.getElementsByClassName("task");
let total = document.getElementById("total");
let completed = document.getElementById("completed");
let pending = document.getElementById("pending");
let checkbox = document.getElementsByClassName("checkbox")

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

updateTotal();
updateCompletedandPending();


addtask.onclick = function () {
    if (nexttask.value.trim() != "") {
        main.innerHTML = main.innerHTML + `<div class="task">
                <input type="checkbox" class="checkbox">
                <p>${nexttask.value}</p>
                <button type="button" class="deletebtn"><i class="fa-solid fa-trash-can"></i></button>
            </div>`
        nexttask.value = "";
        updateTotal();
        updateCompletedandPending();
        
    }
}




main.onclick = function (event) {
    let btn = event.target.closest(".deletebtn");
    if (btn) {
        btn.closest(".task").remove();
        updateTotal();
        updateCompletedandPending();
    }

    if (event.target.classList.contains("checkbox")) {
        updateCompletedandPending();
    }
}

nexttask.onkeydown = function(event){
    if(event.key == "Enter"){
        addtask.onclick();
    }
}



