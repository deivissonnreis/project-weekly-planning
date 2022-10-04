var buttonAddTask = document.getElementById('buttonAddTask');
var activityArea = document.getElementById('activityArea');
var listActivity = document.getElementById('list-activity');
var timeActivity = document.getElementById('time-activity');
var selectDay = document.getElementById('select-day');
var saveLocalStorage = document.getElementById('buttonSaveLocal');

var taskSeg = [];
var taskTer = [];
var taskQua = [];
var taskQui = [];
var taskSex = [];
var taskSab = [];
var taskDom = [];
// var weekDays;

var buttonSeg = document.getElementById('button-seg');
var buttonTer = document.getElementById('button-ter');
var buttonQua = document.getElementById('button-qua');
var buttonQui = document.getElementById('button-qui');
var buttonSex = document.getElementById('button-sex');
var buttonSab = document.getElementById('button-sab');
var buttonDom = document.getElementById('button-dom');
var color = document.getElementById('taskcolor');
var task = document.getElementsByClassName('task-container');





//Manipular tarefas INICIO

 if(localStorage.getItem('tarefas')){
    var storage = JSON.parse(localStorage.getItem('tarefas'))
 }else{
    var storage = [];
 }


activityArea.addEventListener('keypress', (e) =>{
    
        if(e.key == "Enter"){
            e.preventDefault()
            let tarefa = {
                nome: activityArea.value,
                id: gerarId(),
                time: timeActivity.value,
                daySelected: selectDay.value,

            }
            
            addTask(tarefa);

        }

    })

    

   
buttonAddTask.addEventListener('click', (e) => {

    let tarefa = {
        nome: activityArea.value,
        id: gerarId(),
        time: timeActivity.value,
        daySelected: selectDay.value,
        

    }
    
        localStorage.setItem('tarefas', JSON.stringify('tarefas', [...storage, tarefa]));
        storage = JSON.parse(localStorage.getItem('tarefas'))
        console.log(JSON.stringify('tarefas'))
        addTask(tarefa);

})

// saveLocalStorage.addEventListener('click', (e) =>{

//     Array.from(weekDays).forEach(weekArray =>{

//         localStorage.setItem('tarefas', weekArray);
//         console.log(JSON.stringify(weekArray));

//     })

//     // storage = JSON.parse(localStorage.getItem('tarefas'));
//     // console.log(weekDays);
//     // console.log(JSON.stringify(taskSeg))
//     // console.log(JSON.stringify(weekDays))

// })



function getLocalStorage(){
    // gera automaticamente as tasks do localStorage
    var tasks = JSON.parse(localStorage.getItem('tarefas'))
    tasks.map(task => {

        if(task != null){

        console.log(task);
        let li = document.createElement('li');
        li.classList.add('task-container');
        li.id = task.id;
        li.classList.add(task.daySelected);
        li.classList.add('hide');

        if(task.daySelected == 'idSeg'){
            taskSeg = document.getElementsByClassName(task.daySelected)
    
        }else if (task.daySelected == 'idTer'){
            taskTer = document.getElementsByClassName(task.daySelected)
    
        }
        else if (task.daySelected == 'idQua'){
            taskQua = document.getElementsByClassName(task.daySelected)
    
        }
        else if (task.daySelected == 'idQui'){
            taskQui = document.getElementsByClassName(task.daySelected)
    
        }
        else if (task.daySelected == 'idSex'){
            taskSex = document.getElementsByClassName(task.daySelected)
    
        }
        else if (task.daySelected == 'idSab'){
            taskSab = document.getElementsByClassName(task.daySelected)
    
        }
        else if (task.daySelected == 'idDom'){
            taskDom = document.getElementsByClassName(task.daySelected)
    
        }

        let h1 = document.createElement('h1');
        h1.classList.add('act-time');
        h1.innerHTML = task.time;

        let div = document.createElement('div');
        div.id = 'task';

        let span = document.createElement('span');
        span.id = 'taskcolor';
        span.innerHTML = task.nome;

        let buttonErase = document.createElement('button');
        buttonErase.classList.add('button-erase');
        buttonErase.setAttribute('onclick', 'deleteTask ('+task.id+')');
        buttonErase.innerHTML = 'Apagar';

        div.appendChild(span);
        div.appendChild(buttonErase);

        li.appendChild(h1);
        li.appendChild(div);

        listActivity.appendChild(li)
        
        }

    })
   
}

// getLocalStorage();

function addTask(tarefa){
    
    
    activityArea.value = '';
    let li = createTask(tarefa);
    listActivity.appendChild(li);

}

function createTask(tarefa) {

    let li = document.createElement('li');
    li.classList.add('task-container');
    li.id = tarefa.id;
    li.classList.add(tarefa.daySelected);
    li.classList.add('hide');

    if(tarefa.daySelected == 'idSeg'){
        taskSeg = document.getElementsByClassName(tarefa.daySelected)

    }else if (tarefa.daySelected == 'idTer'){
        taskTer = document.getElementsByClassName(tarefa.daySelected)

    }
    else if (tarefa.daySelected == 'idQua'){
        taskQua = document.getElementsByClassName(tarefa.daySelected)

    }
    else if (tarefa.daySelected == 'idQui'){
        taskQui = document.getElementsByClassName(tarefa.daySelected)

    }
    else if (tarefa.daySelected == 'idSex'){
        taskSex = document.getElementsByClassName(tarefa.daySelected)

    }
    else if (tarefa.daySelected == 'idSab'){
        taskSab = document.getElementsByClassName(tarefa.daySelected)

    }
    else if (tarefa.daySelected == 'idDom'){
        taskDom = document.getElementsByClassName(tarefa.daySelected)

    }
    
    let h1 = document.createElement('h1');
    h1.classList.add('act-time');
    h1.innerHTML = tarefa.time;

    let div = document.createElement('div');
    div.id = 'task';

    let span = document.createElement('span');
    span.id = 'taskcolor';
    span.innerHTML = tarefa.nome;

    let buttonErase = document.createElement('button');
    buttonErase.classList.add('button-erase');
    buttonErase.setAttribute('onclick', 'deleteTask ('+tarefa.id+')');
    buttonErase.innerHTML = 'Apagar';

    div.appendChild(span);
    div.appendChild(buttonErase);

    li.appendChild(h1);
    li.appendChild(div);


    return li;
}

function deleteTask(idTarefa) {
    let confirmarExclusão = window.confirm("Deseja excluir a atividade?");
    if(confirmarExclusão) {
        let li = document.getElementById(idTarefa)
        listActivity.removeChild(li);

    }

}

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

//Manipular tarefas FIM

// <-------------------------------------------------------------------------> //

//Filtrar Dias INICIO


function weekColor(colorDay, taskDay){
    
    var weekDays = [taskSeg, taskTer, taskQua, taskQui, taskSex, taskSab, taskDom];

    Array.from(weekDays).forEach(weekDay =>{
        if(weekDay != taskDay){
           Array.from(weekDay).forEach(itemHide =>{
                itemHide.classList.add('hide');

            })
          
        }
    })

    Array.from(taskDay).forEach(task =>{
         task.classList.remove('hide');

     })
    Array.from(listActivity.children).forEach(item => {
            item.style.setProperty('--backTask', colorDay);
            
        });

}

buttonSeg.addEventListener('click', () => weekColor('#FFA246', taskSeg));
buttonTer.addEventListener('click', () => weekColor('#35E185', taskTer));
buttonQua.addEventListener('click', () => weekColor('#6688FF', taskQua));
buttonQui.addEventListener('click', () => weekColor('#B366FF', taskQui));
buttonSex.addEventListener('click', () => weekColor('#66D1FF', taskSex));
buttonSab.addEventListener('click', () => weekColor('#FF66D4', taskSab));
buttonDom.addEventListener('click', () => weekColor('#FF6666', taskDom));




