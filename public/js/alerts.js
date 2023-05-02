
// Alerta para confirmar eliminacion de Voluntariado
function deleteVolunt(id, titulo) {
  Swal.fire({
      title: `¿Estás seguro de eliminar ${titulo} del listado?`,
      showCancelButton: true,
      cancelButtonColor: '#6e7881',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      confirmButtonText: `
      <a class="AlertConfirm" href="/deletevolunt/${id}?_method=delete">Eliminar</a>`,
      allowOutsideClick: () => !Swal.isLoading()
  })
}