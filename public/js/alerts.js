// PRUEBA
function intentoAviso() {
  console.log("entra?")
  Swal.fire('Any fool can use a computer')
}

// Alerta para confirmar eliminacion de Voluntariado
function deleteVolunt(id, titulo) {
  Swal.fire({
      title: `¿Estás seguro de eliminar ${titulo} del listado?`,
      showCancelButton: true,
      cancelButtonColor: '#6e7881',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      confirmButtonText: `<form action="/deletevolunt/${id}?_method=DELETE" method="POST"><button class="AlertConfirm" type="submit">Delete</button></form>`,
      allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
      if (result.isConfirmed) {
          window.location.href = `/deletevolunt/${id}?_method=DELETE`;
      }
  });
}