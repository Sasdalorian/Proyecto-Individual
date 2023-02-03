const usuarios = [
    {nombreUsuario: "Sasdalorian", password: "1234", email: "sasdalorian.contraseña@gmail.com", id: 1},
    {nombreUsuario: "Letuse", password: "contraseñapaprobar2", email: "lechuga.androgena@gmail.com", id: 2},
    {nombreUsuario: "Gato", password: "contraseñapaprobar3", email: "gato3000@gmail.com", id: 3},
    {nombreUsuario: "Cono", password: "contraseñapaprobar4", email: "con0no@gmail.com", id: 4},
    {nombreUsuario: "OhZeta", password: "contraseñapaprobar5", email: "zzzwaffle@gmail.com", id: 5}
]

const btnLogin = document.querySelector('#btnLogin');
let loginNav = document.querySelector('#login');
const loginModal = document.querySelector('#modal');
const navbar = document.querySelector('.navbar-nav')
btnLogin.addEventListener('click', login)

function login(e) {
    const loginUser = document.querySelector('#login-login');
    const loginPass = document.querySelector('#password-login');
    e.preventDefault();

   usuarios.filter(users => {
        if((loginUser.value === users.nombreUsuario || loginUser.value === users.email) && loginPass.value === users.password) {
            loginModal.style.display = "none";
            Swal.fire({
                icon: 'success',
                title: 'Has iniciado sesión.',
                showConfirmButton: false,
                timer: 1500
              })
                loginNav.style.display = "none"
                const usuario = document.createElement('p');
                usuario.classList.add('nav-link', 'm-0');
                usuario.textContent = users.nombreUsuario;
                navbar.appendChild(usuario);
                console.log('pasamo');
        }
    })
}