//A função concluir tarefas recebe o checkbox, 
//e a partir dele seleciona o li(item) pai mais próximo usando a função closest
//e remove ele(item) usando o remove 
function concluirTarefa(checkbox) {
  const tarefa = checkbox.closest('li');
  tarefa.remove();
}

//Para adicionar tarefas, é criado uma função 
//que vai tratar o envio do formulário 
function adicionarTarefa(event) {
  event.preventDefault();                        //evita o comportamento padrão de recarregar a tela
  const inputTarefa = event.target.task;         //pega o texto da tarefa
  const textoTarefa = inputTarefa.value.trim();  //tira espaços das pontas do texto

  //Caso o valor seja vazio, vai mostrar um alerta
  if (textoTarefa === '') {
    alert('A tarefa precisa de um título');
    return;
  }

  //Se o valor for válido, vai criar um item novo pra lista com o texto inserido
  //E vai inserir o evento de concluir tarefa no onclick
  const htmlTarefa = `
      <li>
        <input type="checkbox" onclick="concluirTarefa(this)" />
        <span>${textoTarefa}</span>
      </li>
    `;

  //Aqui seleciona a lista, adiciona o item e limpa o formulário
  document
    .querySelector('#todo-list')
    .insertAdjacentHTML('beforeend', htmlTarefa.trim());

  inputTarefa.value = '';
}

//Com a função CriarTarefas definida,
//basta passar a função para o event listener
//Portanto, a função é chamada quando o evento acontece  
document
  .querySelector('#form-add-todo')  
  .addEventListener('submit', adicionarTarefa);
