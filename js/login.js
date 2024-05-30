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
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];



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
    // event.preventDefault();

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
        }
    });

    if (userEncotrado) {
        localStorage.setItem("loggedInUser",nombre);
        actualizarNavBar(); 
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

const logout = () => {
    localStorage.removeItem('loggedInUser');
    actualizarNavBar();
    alert("Has cerrado sesión.");
    location.replace("/index.html");
};

document.getElementById('logoutBtn').addEventListener('click', logout);


