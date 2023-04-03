const form = document.getElementById("formulario");

form.addEventListener('submit', (e) => {
	e.preventDefault();

    const no = document.getElementById("nombre").value;
    const em = document.getElementById("email").value;
    const me = document.getElementById("mensaje").value;

	if (no === '') {
        errorFunc('nombre', 'Por favor, escriba su nombre.');
	} else {
        noError('nombre');
	}

	if (em === '') {
        errorFunc('email', 'Por favor, ingrese un correo electrónico.');
	}else {
        noError('email');
	}

	if (me === '') {
        errorFunc('mensaje', 'Por favor, escriba un comentario.');
	} else {
        noError('mensaje');
	}

	if (!document.querySelectorAll('.invalid').length) {
		//alert('El formulario ha sido enviado.');		
		form.reset();
        let comentario = new Persona(no, em, me);
        comentario.comentar();
	}

});

  
function errorFunc(tagName, message) {
    document.getElementById(tagName).classList.add('invalid');
    document.getElementById(tagName + '-error').innerHTML = message;
}

function noError(tagName) {
    document.getElementById(tagName).classList.remove('invalid');
    document.getElementById(tagName + '-error').innerHTML = '';
}