// Campos Vacios Register
export function camposVacios() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Faltan campos por rellenar.',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}