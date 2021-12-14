import  Modal  from './modal.js';

const modal = Modal();

//buscando as tags do botao marcar como lida
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//Pegar os botoes que existem com a classe check e delete
const checkButtons = document.querySelectorAll('.actions a.check');
const deleteButton = document.querySelectorAll('.actions a.delete');

//Percorrendo os botoes e adcionando um eventlistener
checkButtons.forEach(button => {
    //adciona a escuta
    button.addEventListener('click', handleClick)
});

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
});

// criar funcao para os eventos dos botoes
function handleClick(event, check = true) {

    event.preventDefault(); // impede que se comporte como link
    const text = check ? 'Marcar como lida' : 'excluir'; // se o event check for true condicao 1 senao condicao 2
    const slug = check ? 'check' : 'delete';

    const roomId = document.querySelector('#room-id').dataset.id; // pegar id da pergunta
    const questionId = event.target.dataset.id;
    
    const form = document.querySelector('.modal form'); // selecionar o form
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    // alterando os textos do modal usando template string
    modalTitle.innerHTML = `${text} esta pergunta` 
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;

    check ? modalButton.classList.remove('red'): modalButton.classList.add('red'); // se check is true, adciona ou remove classe red

    modal.open();
}



