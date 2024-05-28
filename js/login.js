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
const admin = [
    { 
    nombre: "Geronimo",
    apellido : "Rios Antenucci",
    nombreDeUsuario : "gero1108",
    mail:"antenuccifc@gmail.com",
    contraseña:"12345",
    admin : true,
     },
     {
        nombre: "Geronimo",
        apellido : "Rios Antenucci",
        nombreDeUsuario : "gero1109",
        mail:"antenuccifc@gmail.com",
        contraseña:"123456",
        admin : false,
     },
]
    
      
    



let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const inicioSesion = (event) =>{
    event.preventDefault();

            let nombre = document.querySelector("#nombre_usuarioL").value;
            let passw = document.querySelector("#contraseña_usuario").value;

            let userData = JSON.parse(localStorage.getItem("usuarios"));

            let userFound = false;
            let isAdmin = false;

            userData.forEach((item) => {
                if (nombre === item.nombreDeUsuario && passw === item.contraseña) {
                    userFound = true;
                    if (item.admin) {
                        isAdmin = true;
                    }
                }
            });

            if (userFound) {
                if (isAdmin) {
                    location.replace("http://127.0.0.1:5500/pages/administracion.html");
                } else {
                    alert("No tienes permisos de administrador.");
                }
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        }




