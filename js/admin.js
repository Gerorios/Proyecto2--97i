let main = document.getElementById("main");

let contenedorTabla = document.getElementById("contenedor-tabla");

let cuerpoTabla = document.getElementById("cuerpo-tabla");

let producto = JSON.parse(localStorage.getItem("productos")) || [];


   
const crearProducto = (event) =>{
    console.log("funcion crearproducto");
    event.preventDefault();

    let id = new Date().getTime();
    let title = document.getElementById("titulo").value;
    let description = document.getElementById("descripcion").value;
    let image = document.getElementById("imagen").value;
    let price = parseFloat(document.getElementById("precio").value); 
    let category = document.getElementById("categoria").value;
    let carrito = false;

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
        let indice = producto.findIndex((item) => {
        return item.id == id;
    });

  
        document.querySelector("#titulo").value = producto[indice].title;
        document.querySelector("#descripcion").value = producto[indice].description;
        document.querySelector("#categoria").value = producto[indice].category;
        document.querySelector("#precio").value = producto[indice].price;
        document.querySelector("#imagen").value = producto[indice].image;
        
        let myModal = new bootstrap.Modal(document.querySelector("#modalEdit")); 
        myModal.show();

        console.log("Producto encontrado:", producto[indice]);
        console.log("Mostrando modal");
        
        

};




cargarTabla();