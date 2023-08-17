const form = document.getElementById('base');
const listaDeTarefas = document.getElementById('tarefas');
let divId = 0;

form.onsubmit = function (e) {
    e.preventDefault();
    const entrada = document.getElementById("nova");
    if (entrada.value === "" || entrada.value.trim() === "") {
        alert("vazio. resolve isso aí, meu.");
    }
    else {
        novoToDo(entrada.value);
        form.reset();
    }
}


function novoToDo(tarefa) {

    let divNova = document.createElement('div');
    let novaTarefa = document.createElement('input');
    let labelTarefa = document.createElement('label');
    const textoTarefa = document.createTextNode(tarefa);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('id', tarefa);
   
    labelTarefa.setAttribute('for', tarefa);

    
    labelTarefa.appendChild(textoTarefa);

    novaTarefa.setAttribute('id', tarefa+divId);
    divId++;
    divNova.classList.add('tarefa');
    divNova.appendChild(novaTarefa);
    divNova.appendChild(labelTarefa);
    listaDeTarefas.appendChild(divNova);

}


