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
    });

    botonFiltrado.addEventListener('click', ()=> {
        botonFiltro.hidden = false;
        botonFiltrado.hidden = true;
    });

    filtro.appendChild(botonFiltro);
    areaFiltrado.appendChild(botonFiltrado);
});