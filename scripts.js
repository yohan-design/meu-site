document.getElementById('meuBotao').addEventListener('click', function()  {
    alert('Você clicou no meu botão!');
});


document.getElementById('formContato').addEventListener('submit', function(event)  {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElenebtById('mensagem').value;

    if(nome === '' || email === '' || mensagem === '')  {
        alert('Por favor, preencha todos os campos bocó.');
    } else {
        alert('Formulário enviado com sucesso meu Nobre!')
        // Aqui você pode adicionar código para a enviar o formulário para um servidor
    }

document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click' function(event) {
        event.preventDefault();


        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);


        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

