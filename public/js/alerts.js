// EliminarVoluntariado
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
};

// Eliminar Usuario
function deleteUsuario(id, nombre) {
  Swal.fire({
    title: `¿Estás seguro de eliminar a ${nombre} de Usuarios?`,
    showCancelButton: true,
    cancelButtonColor: '#6e7881',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    confirmButtonText: `
      <a class="AlertConfirm" href="/deleteusuario/${id}?_method=delete">Eliminar</a>`,
    allowOutsideClick: () => !Swal.isLoading()
  })
}
// Eliminar Admin
function deleteAdmin(id, nombre) {
  Swal.fire({
    title: `¿Estás seguro de eliminar a ${nombre} de Admin?`,
    showCancelButton: true,
    cancelButtonColor: '#6e7881',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    confirmButtonText: `
      <a class="AlertConfirm" href="/deleteadmin/${id}?_method=delete">Eliminar</a>`,
    allowOutsideClick: () => !Swal.isLoading()
  })
}

// Inscribir Voluntario
function inscribir( id, titulo) {
  console.log(id, titulo)
  Swal.fire({
    title: `¿Estás seguro de Inscribirse a ${titulo}?`,
    showCancelButton: true,
    cancelButtonColor: '#6e7881',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#2E8B57',
    confirmButtonText: `
      <a class="AlertConfirm" href="/voluntariadosUser">Inscribirse</a>`,
    allowOutsideClick: () => !Swal.isLoading()
  })
}