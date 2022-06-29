const listaTarefas = window.document.querySelector('#listaTarefas');
const caixaTexto = window.document.querySelector('#caixaTexto');
const botaoAdicionar = window.document.querySelector('#botaoAdicionar');

botaoAdicionar.addEventListener('click', function () {
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    caixaTexto.focus();
});

function adicionaTarefa(textoDaTarefa) {
    const elementoLi = window.document.createElement('li');
    const elementoSPAN = window.document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLi.appendChild(elementoSPAN);
    elementoLi.appendChild(adicionaBotaoRemover());

    return elementoLi;

}

function adicionaBotaoRemover() {
    const botaoRemover = window.document.createElement('button');
    botaoRemover.textContent = '✗';
    botaoRemover.className = 'remover';
    console.log(listaTarefas);

    botaoRemover.addEventListener('click', function () {
        listaTarefas.removeChild(this.parentNode);
    });

    return botaoRemover;
}