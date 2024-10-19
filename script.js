const buttonAdd = document.querySelector(".addTask");
const input = document.querySelector(".inputTask");
const tasks = document.getElementById("listTask");

let criarArray = [];

function mudarPlaceholder(){
  input.placeholder = ""
}

function PegarInput() {
  if(input.value == 0 ){
    alert("Digite Algo")
    input.placeholder = "O que Vamos Fazer ?"
  }else{
  criarArray.push({
    tarefa: input.value,
    concluida: false,
    }
  )
};

  input.value = "";
  input.placeholder="O que Vamos Fazer ?"
  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  criarArray.forEach((task, index) => {
    novaLi =
      novaLi +
      `
        <li class="task ${task.concluida && "done"}" >
            <img src="/imagens/ok.png" alt="ok"onclick="validarTask(${index})">
            <p>${task.tarefa}</p>
            <img src="/imagens/lixeira.png" alt="lixeira" onclick="deletarItem(${index})">
        </li>
        `
  });

  tasks.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(criarArray));
}

function deletarItem(index) {
  criarArray.splice(index, 1);
  mostrarTarefas();
}

function validarTask(index) {
  
  criarArray[index].concluida = !criarArray[index].concluida;

  mostrarTarefas();
}

function recarregarTarefas() {
  const tarefasLocal = localStorage.getItem("lista");

  if (tarefasLocal) {
    criarArray = JSON.parse(tarefasLocal);
  }

  mostrarTarefas();
}

recarregarTarefas();
buttonAdd.addEventListener("click", PegarInput)

