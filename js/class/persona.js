class Persona {
    constructor (nombre,email,mensaje){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }

    comentar(){
        alert(`Nombre: ${this.nombre}\n E-mail: ${this.email}\n Mensaje: ${this.mensaje}`);
    }
}