
/* CARRITO DE DONACION */

/* CONTACTO */
// Eventos de Inputs 
const nombreInput = document.querySelector('#nombreInput');
const apellidoInput = document.querySelector('#apellidoInput');
const emailInput = document.querySelector('#emailInput');
const mensajeInput = document.querySelector('#mensajeInput');
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('#btnEnviar')

const datos = {
    nombreInput: '',
    apellidoInput: '',
    emailInput: '',
    mensajeInput: ''
}

nombreInput.addEventListener('blur', leerTexto);
apellidoInput.addEventListener('blur', leerTexto);
emailInput.addEventListener('blur', leerTexto);
mensajeInput.addEventListener('blur', leerTexto);

    // Evento Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();


    // Validar Formulario

const { nombreInput, emailInput, mensajeInput } = datos;
    if(nombreInput === "" || emailInput === '' || apellidoInput === '') {
        mostrarError('Todos los campos con * son obligatorios.')
        return;
    }
    //Alerta de Envio Formulario
    mostrarMensaje('El formulario ha sido enviado correctamente.')
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

    // Mostrar Alerta de Envio Correcto
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);
    btnEnviar.style.pointerEvents = 'none';
    btnEnviar.style.cursor = 'default';
        //Desaparecer Alerta
    setTimeout(() => {
        alerta.remove();
        btnEnviar.style.pointerEvents = 'auto';
        btnEnviar.style.cursor = 'pointer';
    }, 4000);
}

    // Mostrar Error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error')

    formulario.appendChild(error);
        btnEnviar.style.pointerEvents = 'none';
        btnEnviar.style.cursor = 'default';
        //Desaparecer Error
        setTimeout(() => {
            error.remove();
            btnEnviar.style.pointerEvents = 'auto';
            btnEnviar.style.cursor = 'pointer';
        }, 4000);
    
};