const taskInput = document.getElementById('taskInput')
const taskbtn = document.getElementById('addTaskBtn')
const tasklist = document.getElementById('taskList')

taskbtn.addEventListener('click',()=>{
    console.log("btn clicked")

    // adding the text from the input
    const taskText = taskInput.value.trim();//trim used to remove white space
    if (taskText === "") {
        return
    }

    // creating list dynamically
    const li = document.createElement("li");
    li.textContent = taskText;

    // toggling task 
    li.addEventListener('click',()=>{
        li.classList.toggle("completed");
    })

    // creating delete button dinamically
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "✖";
    deletebtn.classList.add("deletebtn");

    deletebtn.addEventListener('click',(e)=>{
        e.stopPropagation();//used to triggering  toggle action
        li.remove();
    })

    li.appendChild(deletebtn);
    tasklist.appendChild(li)
    taskInput.value ="";

})

