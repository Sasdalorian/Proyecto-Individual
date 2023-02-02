const usuarios = [
    {username: "Sasdalorian", password: "contraseñapaprobar", email: "sasdalorian.contraseña@gmail.com", id: 1},
    {username: "Letuse", password: "contraseñapaprobar2", email: "lechuga.androgena@gmail.com", id: 2},
    {username: "Gato", password: "contraseñapaprobar3", email: "gato3000@gmail.com", id: 3},
    {username: "Cono", password: "contraseñapaprobar4", email: "con0no@gmail.com", id: 4}
]

btnLogin = document.querySelector('#btnLogin');
btnSingUp = document.querySelector('#SingUp');

btnLogin.addEventListener('click', login)

function login() {
    const loginUser = document.querySelector('#login-signUp');
    const passUser = document.querySelector('#SingUp');

    const buscar = usuarios.filter(username => {
        if (loginUser.value === usuarios.username || loginUser === usuarios.email && passUser === usuarios.password) {
            Swal.fire('Any fool can use a computer')
        }
    })

}