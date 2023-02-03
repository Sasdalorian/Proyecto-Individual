const usuarios = [
    {nombreUsuario: "Sasdalorian", password: "1234", email: "sasdalorian.contraseña@gmail.com", id: 1},
    {nombreUsuario: "Letuse", password: "contraseñapaprobar2", email: "lechuga.androgena@gmail.com", id: 2},
    {nombreUsuario: "Gato", password: "contraseñapaprobar3", email: "gato3000@gmail.com", id: 3},
    {nombreUsuario: "Cono", password: "contraseñapaprobar4", email: "con0no@gmail.com", id: 4},
    {nombreUsuario: "OhZeta", password: "contraseñapaprobar5", email: "zzzwaffle@gmail.com", id: 5}
]

btnLogin = document.querySelector('#btnLogin');
loginModal = document.querySelector('#modal')

btnLogin.addEventListener('click', login)

function login(e) {
    const loginUser = document.querySelector('#login-login');
    const loginPass = document.querySelector('#password-login');
    e.preventDefault();

   usuarios.filter(users => {
        if(loginUser.value === users.nombreUsuario || loginUser.value === users.email && loginPass.value === users.password) {
            Swal.fire('AHORA SI QUE SIPOOOOO.');
            console.log('pasamo');
        }
    })
}