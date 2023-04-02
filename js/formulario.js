function validarFormulario(){
    const form = document.getElementById("formulario");
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    let comentario = new Persona(nombre, email, mensaje);
    comentario.comentar();
}


