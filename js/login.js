class usuario {
    constructor(nombreDeUsuario , mail , contraseña , admin= false,nombre, apellido){
        this.nombreDeUsuario = nombreDeUsuario;
        this.mail = mail;
        this.contraseña = contraseña;
        this.admin = admin;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const admin  = [
    {
        nombreDeUsuario: "Geroadmin123",
        mail:"antenuccifc@gmail.com",
        contraseña: "123456",
        admin: true,
        nombre:"Geronimo",
        apellido: "Rios Antenucci",
    }
]

;
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

<<<<<<< HEAD


const actualizarNavBar = () => {
    const username = localStorage.getItem('loggedInUser');
    const loginBtn = document.getElementsByClassName('action-btn');
    const usernameDisplay = document.getElementById('nombreuser');
    const logoutBtn = document.getElementById('logoutBtn');

    if (username) {
        loginBtn.style.display = 'none';
        usernameDisplay.textContent = `Bienvenido, ${username}`;
        logoutBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        usernameDisplay.textContent = '';
        logoutBtn.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', actualizarNavBar);

const inicioSesion = (event) =>{
    event.preventDefault();

    let nombre = document.querySelector("#nombre_usuarioL").value;
    let passw = document.querySelector("#contraseña_usuario").value;

    let userData = JSON.parse(localStorage.getItem("usuarios"));

    let userEncotrado = false;
    let Esadmin = false;

    userData.forEach((item) => {
        if (nombre === item.nombreDeUsuario && passw === item.contraseña) {
            userEncotrado = true;
            if (item.admin) {
                Esadmin = true;
            }
            localStorage.setItem("actualUsuario",JSON.stringify(item));
        } 
    });
    
    if (userEncotrado) { 
        if (Esadmin) {
            alert("Buendia administrador!")
            location.replace("http://127.0.0.1:5500/pages/administracion.html");
        } else {
            alert("Bienvenido a TechTuc")
            location.replace("http://127.0.0.1:5500/index.html")
        }
    } else {
        alert("Usuario o contraseña incorrectos.");
    }

    actualizarBtnLogin();
}

const crearUsuario = (event) =>{
    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let mail = document.querySelector("#mail").value;
    let username = document.querySelector("#nombre_usuario").value;
    let contraseña = document.querySelector("#password").value;
    let admin = false;

    let newUser = new usuario(
        username,
        mail,
        contraseña,
        admin,
        nombre,
        apellido,
    );

     usuarios.push(newUser);

    localStorage.setItem("usuarios",JSON.stringify(usuarios))


    alert("usuario creado correctamente!")
}

const actualizarBtnLogin = () =>{
    let loginBtn = document.querySelector("#loginButton");
    let loginBtnDropdownMenu = document.querySelector("#loginButtonDropdownMenu");
    let actualUsuario = JSON.parse(localStorage.getItem("actualUsuario"));

    if (actualUsuario) {
        loginBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket mx-1"></i>Logout`
        loginBtn.removeAttribute("data-bs-toggle");
        loginBtn.removeAttribute("data-bs-target");
        loginBtn.onclick = cerrarSesion;

        loginBtnDropdownMenu.innerHTML = `<i class="fa-solid fa-right-from-bracket mx-1 mt-1"></i>Logout`;
        loginBtnDropdownMenu.removeAttribute("data-bs-toggle");
        loginBtnDropdownMenu.removeAttribute("data-bs-target");
        loginBtnDropdownMenu.onclick = cerrarSesion;


      } else {
        loginBtn.textContent = "Login";
        loginBtn.setAttribute("data-bs-toggle", "modal");
        loginBtn.setAttribute("data-bs-target", "#modalLogin");
        loginBtn.onclick = null;

        loginBtnDropdownMenu.textContent = "Login";
        loginBtnDropdownMenu.setAttribute("data-bs-toggle", "modal");
        loginBtnDropdownMenu.setAttribute("data-bs-target", "#modalLogin");
        loginBtnDropdownMenu.onclick = null;
      }
}

const cerrarSesion = () =>{
    localStorage.removeItem("actualUsuario");
    alert("Sesion cerrada correctamente!")
    actualizarBtnLogin();
    location.replace("../index.html");
}

document.addEventListener("DOMContentLoaded",() =>{
    actualizarBtnLogin();
});



