const listaTarefas = window.document.querySelector('#listaTarefas');
const caixaTexto = window.document.querySelector('#caixaTexto');
const botaoAdicionar = window.document.querySelector('#botaoAdicionar');
const listaSuspensa = window.document.querySelector('#listaSuspensa')

/*Listner - Sempre que o botão adicionar for clicado pelo mouse
adiciona um item ou uma tarefa na lista*/
botaoAdicionar.addEventListener('click', function () {
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
    caixaTexto.focus();
});

function adicionaTarefa(textoDaTarefa) {
    const elementoLi = window.document.createElement('li');
    const elementoSPAN = window.document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLi.className = 'naoRealizada';
    elementoLi.appendChild(elementoSPAN);
    elementoLi.appendChild(adicionaBotaoRemover());

    /*Listner - Sempre que um item da lista for clicado pelo mouse
    altera o marcador,a cor da fonte risca o texto*/
    elementoSPAN.addEventListener('click', function () {
        if (this.id === 'tarefa') {
            if (this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    });

    return elementoLi;

}

function adicionaBotaoRemover() {
    const botaoRemover = window.document.createElement('button');
    botaoRemover.textContent = '✗';
    botaoRemover.className = 'remover';
    console.log(listaTarefas);
    /*Listner - Sempre o botão remover for clicado pelo mouse
    remove um item da lista*/
    botaoRemover.addEventListener('click', function () {
        listaTarefas.removeChild(this.parentNode);
        exibeOcultaListaSuspensa();
    });

    return botaoRemover;
}

function exibeOcultaListaSuspensa() {
    const elementoSPAN = window.document.querySelector('#tarefa');
    if (elementoSPAN === null) {
        listaSuspensa.setAttribute('hidden', 'hidden');
    } else {
        listaSuspensa.removeAttribute('hidden');
    }
}

listaSuspensa.addEventListener('change', function () {
    if (listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = window.document.querySelectorAll('#tarefa');
        for (tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if (listaSuspensa.selectedIndex === 3) {
        const vetorBotoes = window.document.querySelectorAll('.remover');
        for (botao of vetorBotoes) {
            botao.dispatchEvent(new Event('click'));
        }
    }


});