const btn = document.getElementById('button');
const dialogForm = document.getElementById('formularioEnviado');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.textContent = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_msgpzxs';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Enviar';
                dialogForm.showModal();
                setTimeout(() => {
                    dialogForm.close();
                }, "1000");
            }, (err) => {
                btn.textContent = 'Enviar';
                alert(JSON.stringify(err));
            });
    });