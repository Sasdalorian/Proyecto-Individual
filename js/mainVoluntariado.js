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
                    <h5 class="container__area__titulo areas">${areas.titulo}</h5>
                    <p class="container__area__ubicacion areas">${areas.ubicacion}</p>
                    <p class="container__area__area areas">Área: ${areas.area}</p>
                    <p class="container__area__cantidad areas">
                        <svg  class="iconPerson" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> 
                        ${areas.cantidad}</p>

                    <p class="container__area__quehacer areas">
                        <svg class="iconPerson" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        ${areas.quehacer}</p>

                    <p class="container__area__duracion areas">Duración: ${areas.duracion}</p>

                    <p class="container__area__beneficio areas">
                    <svg class="iconPerson" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                        ${areas.beneficio}</p>
                </div>
            </div>
        </div>
    </a>
        `;
    })
    document.getElementById('contenedor__areas').innerHTML = areasVolunt;
})