document.getElementById('form__regalo').style.display = "none";
document.getElementById('form__parami').style.display = "none";
document.getElementById('formatoFisica').style.display = "none";
document.getElementById('formatoFisica2').style.display = "none";
document.getElementById('formatoFisica3').style.display = "none";
document.getElementById('formatoFisica4').style.display = "none";
document.getElementById('placa').style.display = "none";

let parami = document.getElementsByClassName("form__parami");
let regalo = document.getElementsByClassName("form__regalo");

/* PARA QUIEN ES EL ARBOL */
$("#button__parami").click(function() {
    $(this).addClass("active");
    $("#button__regalo").removeClass("active");
    $("#form__parami").show();
    $(regalo).hide();
    return false;
});

$("#button__regalo").click(function() {
    $(this).addClass("active");
    $("#button__parami").removeClass("active");
    $(regalo).show();
    $(parami).hide();
    return false;
});

/* FORMATO TARJETA */
$("#opcionFisica").click(function() {
    $("#formatoFisica").show();
    $("#formatoFisica2").show();
    $("#formatoFisica3").show();
    $("#formatoFisica4").show();
});
$("#opcionDigital").click(function() {
    $("#formatoFisica").hide();
    $("#formatoFisica2").hide();
    $("#formatoFisica3").hide();
    $("#formatoFisica4").hide();
})


document.getElementById("incluirPlaca").addEventListener("change", function(){
    var miParrafo = document.getElementById("placa");
    if(!this.checked){
        miParrafo.style.display = "none";
    }else{
        miParrafo.style.display = "block";
    }
});


/* ALERT */

/* Variables Regalo */
const nombreInputR = document.querySelector("#nombreInputR");
const apellidoInputR = document.querySelector("#apellidoInputR");
const emailInputR = document.querySelector("#emailInputR");
const dirInputR = document.querySelector("#direccionInputR");
const regionInputR = document.querySelector("#regionInputR");
const comunaInputR = document.querySelector("#comunaInputR");

/* Variables Mi */
const nombreInputM = document.querySelector("#nombreInputM");
const apellidoInputM = document.querySelector("#apellidoInputM");
const emailInputM = document.querySelector("#emailInputM");
const rutInputM = document.querySelector("#rutInputM");
const telInputM = document.querySelector("#telInputM");
const direccionInputM = document.querySelector("#direccionInputM");
const regionInputM = document.querySelector("#regionInputM");
const comunaInputM = document.querySelector("#comunaInputM");
const mensajeInputT = document.querySelector("#mensajeInputT");

/* Variables Global */
const formulario = document.querySelector(".form__contenedor");
const btnEnviar = document.querySelector("#btnEnviar");


const datosR = {
    nombreInputR: '',
    apellidoInputR: '',
    emailInputR: '',
    dirInputR: '',
    regionInputR: '',
    comunaInputR: ''
}

const datosM = {
    nombreInputM: '',
    apellidoInputM: '',
    emailInputM: '',
    rutInputM: '',
    telInputM: '',
    direccionInputM: '',
    regionInputM: '',
    comunaInputM: '',
    mensajeInputT: ''
}

nombreInputR.addEventListener('blur', leerTexto);
apellidoInputR.addEventListener('blur', leerTexto);
emailInputR.addEventListener('blur', leerTexto);
dirInputR.addEventListener('blur', leerTexto);
regionInputR.addEventListener('blur', leerTexto);
comunaInputR.addEventListener('blur', leerTexto);

//Submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
})

function leerTexto(e) {
    datosM[e.target.id] = e.target.value;
}