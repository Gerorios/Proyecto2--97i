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
    let actualUsuario = JSON.parse(localStorage.getItem("actualUsuario"));

    if (actualUsuario) {
        loginBtn.textContent = `Logout`;
        loginBtn.removeAttribute("data-bs-toggle");
        loginBtn.removeAttribute("data-bs-target");
        loginBtn.onclick = cerrarSesion;
      } else {
        loginBtn.textContent = "Login";
        loginBtn.setAttribute("data-bs-toggle", "modal");
        loginBtn.setAttribute("data-bs-target", "#modalLogin");
        loginBtn.onclick = null;
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



