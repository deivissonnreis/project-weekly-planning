let buttonAdd = document.getElementById('buttonAdd');
let buttonGet = document.getElementById('buttonGet');

// buttonAdd.onclick = function (){
//     console.log("cliquei");
// }

buttonAdd.addEventListener("click", function(){
    localStorage.setItem("todos", JSON.stringify( {titulo:"teste", descricao:"a" } ))
});

buttonGet.addEventListener("click", function(){

    console.log(JSON.parse(localStorage.getItem("todos")))
    
});
