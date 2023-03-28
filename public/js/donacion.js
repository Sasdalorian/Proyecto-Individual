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

document.getElementById('button').addEventListener('click', holape)

function holape(e) {
    e.preventDefault();
    if (regalo.classList.contains("desactive")) {
        mostrarError('Aún no se ha habilitado el modo regalo');
    }
    if (!paraMi.classList.contains("active")) {
        mostrarError('Falta elegir si es para ti o es un regalo.');
        return;
    }
    if (!fisica.checked && !digital.checked) {
        mostrarError('Falta elegir entre tarjeta fisica o digital');
        return;
    }

    if (nombreInput.value === '' || apellidoInput.value === '' || emailInput.value === '' || rutInput.value === '' || telInput.value === '' || direccionInput.value === '' || regionInput.value === '' || comunaInput.value === '' || mensajeInputT.value === '') {
        mostrarError('Todos los campos son obligatorios.');
    } else {
        mostrarMensaje('El formulario ha sido enviado correctamente.');
        enviarCorreo();
    }
}
    // Mostrar Alerta de Envio Correcto
    function mostrarMensaje(mensaje) {
        const alerta = document.createElement('P');
        alerta.textContent = mensaje;
        alerta.classList.add('correcto');
    
        formulario.appendChild(alerta);
        button.style.pointerEvents = 'none';
        button.style.cursor = 'default';
            //Desaparecer Alerta
        setTimeout(() => {
            alerta.remove();
            button.style.pointerEvents = 'auto';
            button.style.cursor = 'pointer';
        }, 2000);
    }
        // Mostrar Error en pantalla
    function mostrarError(mensaje) {
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error')
    
        formulario.appendChild(error);
            button.style.pointerEvents = 'none';
            button.style.cursor = 'default';
            //Desaparecer Error
            setTimeout(() => {
                error.remove();
                button.style.pointerEvents = 'auto';
                button.style.cursor = 'pointer';
            }, 2000);
        
    };

/* SUMATORIA ARBOLES DONADOS */
function precioTotal() {
    var cantidadArboles = document.getElementById('cantidadArboles').value;
    var precioTotal = cantidadArboles * 8000;
    document.getElementById('precioArbol').innerHTML = `$ ${precioTotal}`;
}


/* PLACA */
document.getElementById('placa').addEventListener('change', precioDonacion)
document.getElementById('noplaca').addEventListener('change', precioDonacion)
/* TARJETA FISICA */
document.getElementById('opcionFisica').addEventListener('change', precioDonacion)
document.getElementById('opcionDigital').addEventListener('change', precioDonacion)

function precioDonacion() {
    let cantidadArboles = document.getElementById('cantidadArboles').value;
    let precioTotalArboles = cantidadArboles * 8000;
    let precioTotalPlaca = precioTotalArboles + 2500;
    let precioTotalFisica = precioTotalArboles + 2000;
    let precioTotalFP = precioTotalArboles + 4500;
    
    if (placa.checked) {
        document.getElementById('totalDonacion').innerHTML = `$ ${precioTotalPlaca}`
    }
    if (noplaca.checked) {
        document.getElementById('totalDonacion').innerHTML = `$ ${precioTotalArboles}`
    }
    if (digital.checked) {
        document.getElementById('totalDonacion').innerHTML = `$ ${precioTotalArboles}`
    }
    if (fisica.checked) {
        document.getElementById('totalDonacion').innerHTML = `$ ${precioTotalFisica}`
    }
    if (digital.checked && placa.checked) {
        document.getElementById('totalDonacion').innerHTML = `$ ${precioTotalPlaca}`
    }
    if (fisica.checked && placa.checked) {
        document.getElementById('totalDonacion').innerHTML = `$ ${precioTotalFP}`
    }
}

/* ENVIAR CORREO */
function enviarCorreo() {
    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('click', function(event) {
       event.preventDefault();
    
       btn.value = 'Enviando...';
    
       const serviceID = 'default_service';
       const templateID = 'template_ehc6ckq';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar Donacion';
          alert('Donación Enviada!');
        }, (err) => {
          btn.value = 'Enviar Donacion';
          alert(JSON.stringify(err));
        });
    });
}
