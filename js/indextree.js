document.getElementById('formatoFisica').style.display = "none";
document.getElementById('parrafo_regalo').style.display = "none";
document.getElementById('placaP').style.display = "none";

/* BOTONES */
var paraMi = document.getElementById("button__parami");
var regalo = document.getElementById("button__regalo");

paraMi.addEventListener("click", function (e) {
    var regalo = document.getElementById("button__regalo");
    e.preventDefault();
    if (paraMi.classList.contains("active") === true) {
        paraMi.classList.remove("active");
        regalo.classList.remove("desactive");
    } else {
        paraMi.classList.add("active");
        regalo.classList.remove("desactive");
        document.getElementById('parrafo_regalo').style.display = "none"
    }
});
regalo.addEventListener("click", function (e) {
    e.preventDefault()
    if (this.classList.contains("desactive") === true) {
        this.classList.remove("desactive");
        paraMi.classList.remove("active");
        document.getElementById('parrafo_regalo').style.display = "none"
    } else {
        this.classList.add("desactive")
        paraMi.classList.remove("active");
        document.getElementById('parrafo_regalo').style.display = "block"
    }
});
/* OPCION FISICA O DIGITAL */
var fisica = document.getElementById("opcionFisica");
var digital = document.getElementById("opcionDigital");
var placa = document.getElementById("placa");
var noplaca = document.getElementById("noplaca");

fisica.addEventListener('click', mostrarCobro);
digital.addEventListener('click', ocultarCobro);

function mostrarCobro() {
    document.getElementById('formatoFisica').style.display = "block";
};
function ocultarCobro() {
    document.getElementById('formatoFisica').style.display = "none";
};

placa.addEventListener('click', mostrarCobroPlata)
noplaca.addEventListener('click', ocultarCobroPlata)

function mostrarCobroPlata() {
    document.getElementById('placaP').style.display = "block";
};
function ocultarCobroPlata() {
    document.getElementById('placaP').style.display = "none";
};
/* FORMULARIO DONACION ARBOL */

const nombreInput = document.querySelector('#nombreInput');
const apellidoInput = document.querySelector('#apellidoInput');
const emailInput = document.querySelector('#emailInput');
const rutInput = document.querySelector('#rutInput');
const telInput = document.querySelector('#telInput');
const direccionInput = document.querySelector('#direccionInput');
const regionInput = document.querySelector('#regionInput');
const comunaInput = document.querySelector('#comunaInput');
const mensajeInputT = document.querySelector('#mensajeInputT');

const formulario = document.querySelector('.form__contenedor');
const btnEnviarform = document.querySelector('#btnEnviarform');

function holape() {
    if (!paraMi.classList.contains("active") && !regalo.classList.contains("desactive")) {
        mostrarError('Falta elegir si es para ti o es un regalo.')
        return;
    }
    
    if (!fisica.checked && !digital.checked) {
        mostrarError('Falta elegir entre tarjeta fisica o digital')
        return;
    }

    if (nombreInput.value === '' || apellidoInput.value === '' || emailInput.value === '' || rutInput.value === '' || telInput.value === '' || direccionInput.value === '' || regionInput.value === '' || comunaInput.value === '' || mensajeInputT.value === '') {
        mostrarError('Todos los campos son obligatorios.');
    } else {
        mostrarMensaje('El formulario ha sido enviado correctamente.')
    }
}

btnEnviarform.addEventListener('click', function(e) {
    e.preventDefault();
})
    // Mostrar Alerta de Envio Correcto
    function mostrarMensaje(mensaje) {
        const alerta = document.createElement('P');
        alerta.textContent = mensaje;
        alerta.classList.add('correcto');
    
        formulario.appendChild(alerta);
        btnEnviarform.style.pointerEvents = 'none';
        btnEnviarform.style.cursor = 'default';
            //Desaparecer Alerta
        setTimeout(() => {
            alerta.remove();
            btnEnviarform.style.pointerEvents = 'auto';
            btnEnviarform.style.cursor = 'pointer';
        }, 4000);
    }
        // Mostrar Error en pantalla
    function mostrarError(mensaje) {
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error')
    
        formulario.appendChild(error);
            btnEnviarform.style.pointerEvents = 'none';
            btnEnviarform.style.cursor = 'default';
            //Desaparecer Error
            setTimeout(() => {
                error.remove();
                btnEnviarform.style.pointerEvents = 'auto';
                btnEnviarform.style.cursor = 'pointer';
            }, 4000);
        
    };

/* SUMATORIA ARBOLES DONADOS */
function precioTotal() {
    var cantidadArboles = document.getElementById('cantidadArboles').value;
    var precioTotal = cantidadArboles * 8000;
    document.getElementById('precioArbol').innerHTML = `$ ${precioTotal}`;
}

