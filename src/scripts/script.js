const imgSection = document.querySelector('.image-section');
const contentSection = document.querySelector('.content-section');
const confirmSection = document.querySelector('.confirmation-section');
const form = document.querySelector('form');
const msgErro = document.querySelector('.msgErro');
const userEmail = document.querySelector('#userEmail');
const inputEmail = document.querySelector('#email');

// Testa se a entrada é válida e faz o gerenciamento das classes para aparecer a tela de confirmação
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email && regexEmail.test(email)) {
        imgSection.classList.toggle('desaparece');
        contentSection.classList.toggle('desaparece');
        confirmSection.classList.toggle('desaparece');
        userEmail.textContent = email;
        inputEmail.value = "";
        inputEmail.classList.remove('input-error');
        msgErro.classList.add('desaparece');
    }else {
        inputEmail.classList.toggle('input-error');
        msgErro.classList.toggle('desaparece');
        console.log(msgErro);
    }
});

// Volta para a tela do formulário
document.querySelector('#btnDismiss').addEventListener('click',() => {
    imgSection.classList.toggle('desaparece');
    contentSection.classList.toggle('desaparece');
    confirmSection.classList.toggle('desaparece');
});