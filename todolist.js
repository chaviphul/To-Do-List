let addtask = document.getElementById("addtask");
let nexttask = document.getElementById("nexttask");
let main = document.getElementById("main");

addtask.onclick = function () {
    if(nexttask.value!=""){
        main.innerHTML=main.innerHTML+ `<div class="task">
                <input type="checkbox">
                <p>${nexttask.value}</p>
                <button type="button" class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>`
        nexttask.value="";
    }
}