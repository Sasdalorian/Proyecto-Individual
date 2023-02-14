let catalogo = null;
let filtroAplicar = [];

/* CREACION CONTAINER MAIN */
function crearContainer(data) {
    let areasVolunt = '';

    data.forEach(areas => {
        voluntariado.agregarAreas(areas);
    areasVolunt += `
        <a href="#">
        <div class="contenedor__areas__voluntariado">
            <div class="container__area">
                <div>
                    <img class="container__area__img" src="${areas.imagen}" alt="${areas.titulo}"</img>
                </div>
                
                <div class="container__areaInfo">
                    <div class="area__c0">
                        <h5 class="container__area__titulo areas">${areas.titulo}</h5>
                        <p class="container__area__cantidad areas">
                        <svg  class="iconPerson" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> 
                        ${areas.cantidad}</p>
                    </div>

                    <div class="area__c1">
                        <p class="container__area__ubicacion areas">${areas.ubicacion}</p>
                        <p class="container__area__area areas">Área: ${areas.area}</p>
                        <p class="container__area__duracion areas">Duración: ${areas.duracion}</p>
                    </div>

                    <div class="area__c2">
                    <p class="container__area__quehacer areas">
                        <svg class="iconPerson" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        ${areas.quehacer}</p>
                    </div>

                    <div class="area__c3">
                        <p class="container__area__beneficio areas">
                            <svg class="iconPerson" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                            ${areas.beneficio}</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
        `;
    })
    document.getElementById('contenedor__areas').innerHTML = areasVolunt;
}

/* CARGA JSON */
fetch('js/data.json')
.then(res => res.json())
.then(data => {
    catalogo = data;
    crearContainer(data);
});

let voluntariado = new Area();
function buscadorArea() {
    const contenedorAreas =  document.querySelector('#contenedor__areas');
    const inputBuscar = document.getElementById('buscadorAreas');
    const areaEncontrada = voluntariado.buscarArea(inputBuscar.value);
}

/*  FILTRO  */
const categorias = ["Niños", "Emergencias", "Adultos Mayores", "Animales", "Discapacidad", "Medio Ambiente", "Talleres", "Rural", "Construccion"]
const filtro = document.getElementById('aside__categorias');
const areaFiltrado = document.getElementById('aside__filtrando');

categorias.forEach(element => {
    const botonFiltro = document.createElement('button');
    const botonFiltrado = document.createElement('button');
    const sinFiltro = document.getElementById('aside__areas_p')

    botonFiltro.innerHTML = element;
    botonFiltrado.innerHTML = element;
    botonFiltro.classList.add("botonFiltro")
    botonFiltrado.classList.add("botonFiltrado")
    botonFiltrado.hidden = true;

    botonFiltro.addEventListener('click', ()=> {
        botonFiltro.hidden = true;
        botonFiltrado.hidden = false;
        sinFiltro.hidden = true;

        seleccionCategorias(element, "agregar");
    });

    botonFiltrado.addEventListener('click', ()=> {
        botonFiltro.hidden = false;
        botonFiltrado.hidden = true;

        seleccionCategorias(element, "quitar");
    });

    filtro.appendChild(botonFiltro);
    areaFiltrado.appendChild(botonFiltrado);
});

function seleccionCategorias(categoria, accion) {
    if (accion === "agregar") {
        filtroAplicar.push(categoria);
    } else {
       filtroAplicar = filtroAplicar.filter(element => element !== categoria);
    }

    filtrarCatalogoPorCategorias(filtroAplicar);
};

function filtrarCatalogoPorCategorias(filtros) {
    let pruebas = [];
    pruebas = filtros.flatMap(element => catalogo.filter(taller => taller.area.includes(element)));
    const data = new Set(pruebas);
    let result = [...data];
    crearContainer(result);

    if(result.length === 0) {
        crearContainer(catalogo)
    }
};