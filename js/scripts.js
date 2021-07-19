const form = document.getElementById('form-contact');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, 
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('contact-form')

    let carregando = `<p>Carregando</p>`

    let finalizado = `<p>Obrigado por comprar esse curso</p>`

    content.innerHTML = carregando;

    setTimeout(() =>{
        content.innerHTML = finalizado
    }, 1000) 
})