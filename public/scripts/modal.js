export default function Modal() {

    const cancelButton = document.querySelector('.button.cancel'); // busca a classe do button e armazena
    const modalWrapper = document.querySelector('.modal-wrapper'); // busca a classe do wrapper e armazena


    cancelButton.addEventListener('click', close); //Adcionado o evento e chamando a funcao de fechar o modal
    function open(){
        /**Atribuir a funcionalidade de abrir a modal */
        modalWrapper.classList.add('active') // adciona a nova classe
    }
    function close(){
        /**Atribuir a funcionalidade de fechar a modal */
        modalWrapper.classList.remove('active') // remove a classe active
    }

    return {
        open,
        close
    }
}