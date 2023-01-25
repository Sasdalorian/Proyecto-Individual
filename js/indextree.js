document.getElementById('form__regalo').style.display = "none";
document.getElementById('form__parami').style.display = "none";
document.getElementById('formatoFisica').style.display = "none";
document.getElementById('formatoFisica2').style.display = "none";
document.getElementById('formatoFisica3').style.display = "none";
document.getElementById('formatoFisica4').style.display = "none";
document.getElementById('placa').style.display = "none";

const btnparaMi = document.getElementById('button__parami');
const btnRegalo = document.getElementById('button__regalo');

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
