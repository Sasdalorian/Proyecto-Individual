fetch('js/data.json')
.then(function(res) {
    return res.json();
})
.then(function(data) {
    let areasVolunt = '';
    data.forEach(function(areas) {
        areasVolunt += `
        <a href="#">
        <div class="contenedor__areas__voluntariado">
            <div class="container__area">
                <div>
                    <img class="container__area__img" src="${areas.imagen}" alt="${areas.titulo}"</img>
                </div>
                
                <div class="container__areaInfo">
                    <h5 class="container__area__titulo">${areas.titulo}</h5>
                    <p class="container__area__cantidad">N°Voluntarios: ${areas.cantidad}</p>
                    <p class="container__area__ubicacion">${areas.ubicacion}</p>
                    <p class="container__area__area">Área: ${areas.area}</p>
                    <p class="container__area__duracion">Duración: ${areas.duracion}</p>
                    <p class="container__area__quehacer">${areas.quehacer}</p>
                    <p class="container__area__beneficio">${areas.beneficio}</p>
                </div>
            </div>
        </div>
    </a>
        `;
    })
    document.getElementById('contenedor__areas').innerHTML = areasVolunt;
})