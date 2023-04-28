const categorias = ["Niños", "Emergencias", "Adultos Mayores", "Animales", "Discapacidad", "Medio Ambiente", "Talleres", "Rural", "Construccion"]
  const filtro = document.getElementById('aside__categorias');
  const areaFiltrado = document.getElementById('aside__filtrando');

  let filtrosSeleccionados = 0;
  
  categorias.forEach(element => {
    const botonFiltro = document.createElement('button');
    const botonFiltrado = document.createElement('button');
    const sinFiltro = document.getElementById('aside__areas_p')

    botonFiltro.innerHTML = element;
    botonFiltrado.innerHTML = element;
    botonFiltro.classList.add("botonFiltro")
    botonFiltrado.classList.add("botonFiltrado")
    botonFiltrado.hidden = true;

    botonFiltro.addEventListener('click', async () => {
        botonFiltro.hidden = true;
        botonFiltrado.hidden = false;
        sinFiltro.hidden = true;
        const idArea = categorias.indexOf(element) + 1;
        console.log(idArea);

        filtrosSeleccionados++;
        if (filtrosSeleccionados === 1) {
          sinFiltro.hidden = true;
        }
      });

      botonFiltrado.addEventListener('click', ()=> {
        botonFiltro.hidden = false;
        botonFiltrado.hidden = true;
        filtrosSeleccionados--;
        if (filtrosSeleccionados === 0) {
          sinFiltro.hidden = false;
        }
      });

      filtro.appendChild(botonFiltro);
      areaFiltrado.appendChild(botonFiltrado);
  });

const botonesCategorias = document.querySelectorAll('.boton-categoria');
botonesCategorias.forEach(boton => {
  boton.addEventListener('click', () => {
    const categoria = boton.dataset.categoria;
    filtrarVoluntariadosPorCategoria(categoria);
  });
});

function filtrarVoluntariadosPorCategoria(categoria) {
    const voluntariados = obtenerVoluntariados(); // Obtener todos los voluntariados
    const voluntariadosFiltrados = voluntariados.filter(voluntariado => voluntariado.categoria === categoria);
    mostrarVoluntariados(voluntariadosFiltrados); // Mostrar solo los voluntariados filtrados
  }