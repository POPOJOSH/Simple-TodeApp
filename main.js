




const addOption = document.getElementById('Form');
const taskList = document.getElementById('task-list');
const removeallBtn = document.getElementById('removeAll-btn');
const inst = document.getElementById('instruction');
const msg = document.querySelector('.msg');


addOption.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    
    addTask();
})

taskList.addEventListener('click', removeTask);
removeallBtn.addEventListener('click', removeAll);


function addTask() {
    
    //get input value
    let newTask = document.getElementById('task').value;
     if (newTask === '') {

         //setError(newTask,'Please input task');
         
     }else{
        

        //create new li
        let li = document.createElement('li');

        //add class name 
        li.className = 'item';

        //add textnode with input value
        li.appendChild(document.createTextNode(newTask));

        //create remove button
        let removeBtn = document.createElement('button');

        //add class name 
        removeBtn.className = 'remove-btn';

        //append textnode
        removeBtn.appendChild(document.createTextNode('Remove'));

        //append btn to li
        li.appendChild(removeBtn);

        //append li to list
        taskList.appendChild(li);
        taskList.style.margin = '10px';
        //remove instruction
        inst.style.display = 'none';
    }
}

//Remove task
function removeTask(e) {
    if (e.target.classList.contains('remove-btn')) {
            let li = e.target.parentElement;
            taskList.removeChild(li);        
    }
}

//Remove all tasks
function removeAll() {
    let tasks = document.getElementsByTagName('li');

    Array.from(tasks).forEach(function (item){
        item.style.display = 'none';
    })    
}
/*
function setError() {
  
    msg.innerHTML= 'Please enter task';
    
}
*/
