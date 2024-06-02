let main = document.getElementById("main");

let contenedorTabla = document.getElementById("contenedor-tabla");

let cuerpoTabla = document.getElementById("cuerpo-tabla");

let producto = JSON.parse(localStorage.getItem("productos")) || [];

const validarUsuario = () =>{

    let usuarios = JSON.parse(localStorage.getItem("actualUsuario")) || [];

    if (usuarios.admin) {
        cargarTabla();
        cargarTablaUser();

    }else{
        main.innerHTML = "";

        let col = document.createElement("div");
        col.classList = "col mt-3"

        let content = `
        <div class="alert alert-danger" role="alert">
        No tiene permiso para acceder a esta página!
      </div>`

       col.innerHTML=content;
       main.append(col);

    }
}

const crearProducto = () =>{
    let id = new Date().getTime();
    let title = document.getElementById("titulo").value;
    let description = document.getElementById("descripcion").value;
    let image = document.getElementById("imagen").value;
    let price = parseFloat(document.getElementById("precio").value); 
    let category = document.getElementById("categoria").value;
    let carrito;

    let productoN = new productos(
        id,
        title,
        price,
        description,
        category,
        image,
        carrito
    )
    producto.push(productoN);

    localStorage.setItem("productos", JSON.stringify(producto));
    
    document.getElementById("titulo").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("imagen").value="";
    document.getElementById("precio").value="";
    document.getElementById("categoria").value="";


    cargarTabla();
    let modal = new bootstrap.Modal(document.getElementById("modalAdmin"));
    modal.hide();
    
}
const cargarTabla = ()=>{
    cuerpoTabla.innerHTML="";
    producto.forEach((item)=>{
        let rowTable = document.createElement("tr");
        let contenido = `
        <td ><img src="${item.image}" alt="" class ="w-25 mx-5"></td>
        <th class="fs-6">${item.title} </th>
        <th class="fs-6">${item.description}</th>
        <th class="fs-6">${item.category}</th>
        <th class="fs-5" style="color: green;">$${item.price}</th>
        <th>
        <div class="d-flex gap-2">
        <i class="fa fa-pencil puntero" onclick="editarDatos(${item.id} )"  aria-hidden="true"></i>
        <i class="fa fa-trash puntero" onclick="eliminarProducto(${item.id} )"  aria-hidden="true"></i>
        </div>
        </th>
        `
        rowTable.innerHTML=contenido;
        cuerpoTabla.append(rowTable);
    })
}

const eliminarProducto = (id) =>{
    let newArray = producto.filter((item)=>{
        return item.id != id;
    })
    let validad = confirm("Seguro que desea eliminar el prodcuto del stock?")
    if (validad) {
        producto = [...newArray];

        localStorage.setItem("productos", JSON.stringify(producto));
    }else{
        alert("Operacion cancelada ")
    }
    cargarTabla();
}

//fUNCION PARA EDITAR DATOS DEL PRODUCTO
const editarDatos = (id) => {
         indice = producto.findIndex((item) => {
        return item.id == id;
    });
        const modal = new bootstrap.Modal(document.querySelector("#modalEdit"));
        document.querySelector("#titulo-edit").value = producto[indice].title;
        document.querySelector("#descripcion-edit").value = producto[indice].description;
        document.querySelector("#categoria-edit").value = producto[indice].category;
        document.querySelector("#precio-edit").value = producto[indice].price;
        document.querySelector("#imagen-edit").value = producto[indice].image;
        
        
        modal.show();
        console.log("Producto encontrado:", producto[indice]);
        console.log("Mostrando modal");
    

};

const actualizarDatos = () =>{
    const modal = new bootstrap.Modal(document.querySelector("#modalEdit"));

    producto[indice].title = document.querySelector("#titulo-edit").value;;
    producto[indice].description = document.querySelector("#descripcion-edit").value; 
    producto[indice].category = document.querySelector("#categoria-edit").value; 
    producto[indice].price = document.querySelector("#precio-edit").value;
    producto[indice].image = document.querySelector("#imagen-edit").value;

    let validacion = confirm("Seguro que desea realizar los cambios en el producto?")
    
    if (validacion) {
        localStorage.setItem("productos", JSON.stringify(producto));
        
    }else{
        alert("Cambios cancelados");
    }
   
    
    cargarTabla();

    modal.hide();
}

let contenedorTablaUsuario = document.getElementById("contenedor-tabla-usuarios");

let cuerpoTablaUsuario = document.getElementById("cuerpo-tabla-usuarios");



const cargarTablaUser = () => {
    cuerpoTablaUsuario.innerHTML = "";

    usuarios.forEach((users) =>{
        let rowTable = document.createElement("tr");
        let contenido = `
        <td>${users.nombre}</td>
        <th class="fs-6">${users.apellido} </th>
        <th class="fs-6">${users.nombreDeUsuario}</th>
        <th class="fs-6">${users.mail} </th>
        <th class="fs-6">${users.admin ? "Admin" : "User"} </th>
        <th>
        <div class="d-flex gap-2">
        <i class="fa-solid fa-arrow-up puntero" onclick="hacerAdmin(${users.id})" style="color: #04ff00;"></i>
        <i class="fa-solid fa-ban puntero" onclick="eliminarUser(${users.id} )" style="color: #ff0000;"></i>
        </div>
        </th>
        `
        rowTable.innerHTML=contenido;
        cuerpoTablaUsuario.append(rowTable);

    })
}

const hacerAdmin = (id) =>{
    
    let indice = usuarios.findIndex((item)=>{
        return item.id == id;
      });
      usuarios[indice].admin = !usuarios[indice].admin;
    
      localStorage.setItem("usuarios",JSON.stringify(usuarios));
    
      cargarTablaUser();
}
  
const eliminarUser =(id) =>{
    let posicion = usuarios.findIndex((user) =>{
        return user.id == id;
    })
    

    let validar = confirm("Seguro que desea banear el usuario?");
    if (validar) {
        usuarios.splice(posicion,1);
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
    }else{
        alert("operacion cancelada!")
    }

    cargarTablaUser();
}





validarUsuario();