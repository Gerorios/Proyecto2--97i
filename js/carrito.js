
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");
let nofavs = document.getElementById("contenedor")
let producto = JSON.parse(localStorage.getItem("productos")) || [];
let totalcontenedor = document.getElementById("total-content")

 //READ
const listarCarritoTabla = () => {
   cuerpoTabla.innerHTML = "";
   totalcontenedor.innerHTML="";
   let productoCarrito = producto.filter((item) => {
       return item.carrito === true;
   });

   if (productoCarrito.length === 0) {
    mostrarCarritoVacio();
   }
   productoCarrito.forEach((item) => {
       let tablerow = document.createElement("tr");
       let contenidoTabla = `
           <td ><img src="${item.image}" alt="" class ="w-50 mx-5"></td>
           <td class = "fs-6">${item.title}"</td>
           <td class = "fs-5" style="color: green">$${item.price}</td>
           <td>
               <div class="d-flex puntero p-2">
                   <i class="fa fa-trash fa-xl puntero" onclick="eliminarCarrito(${item.id})" aria-hidden="true" style ="color: red"></i>
               </div>
           </td>
       `;
       tablerow.innerHTML = contenidoTabla;
       cuerpoTabla.append(tablerow);
   });
   imprimirTotal();
}

//Funcion que muestra el carrito vacio si no hay elementos agregado.
const mostrarCarritoVacio = () => {
    cuerpoTabla.innerHTML = "";
    totalcontenedor.innerHTML = "";
    let cartel = document.createElement("div");
    cartel.classList = "alert alert-danger";
    cartel.innerHTML = "<h2> No hay elementos agregados al carrito</h2>";
    nofavs.innerHTML = ""; 
    nofavs.append(cartel);
}

//UPDATE
//Funcion para actualizar el total de la compra
const actualizarTotal = () => {
    let total = 0;  
    for (let i = 0; i < producto.length; i++) {

        if (producto[i].carrito) {

            total += producto[i].price;
        }
    }
    document.querySelector("#total p").textContent = `Total: $${total.toFixed(2)}`;
}
//READ
//Funcion para impirmir el cartel del total.
const imprimirTotal = () =>{
    let productosCarrito = producto.filter((item) =>{
        return item.carrito == true;
    })
    if(productosCarrito.length > 0){
        let rowTotal = document.createElement("div");
        rowTotal.classList="row";

        let total = `
        <div class="w-100 d-flex justify-content-end caja-carrito">
        <div class="d-flex">
          <div class="caja-boton-continuar">
          <button type="button" data-bs-toggle="modal" id="boton-abrir-modal" data-bs-target="#productoModal" data-bs-whatever="@mdo">Ir a pagar</button>
          </div> 
          <div id="total" class="d-flex ">
            <p class="text-center mt-2 mx-3 fs-6 p-1"></p>
          </div>
        </div>
        </div>
        `
        rowTotal.innerHTML=total;
        totalcontenedor.appendChild(rowTotal);
    }
    actualizarTotal();
}

//DELETE
//Funcion para eliminar los elementos del carrito
const eliminarCarrito = (id) =>{
    //Tomo el indice del producto que quiere eliminar
   let index = producto.findIndex((item)=>{
      return item.id == id;
    })
    //Valido si quiere eliminarlo  o no
    let validacion = confirm("Seguro que desea eliminar el producto del carrito?");
    if(validacion){
        //Revierto el valor del producto de la propiedad carrito,asi este desaparece de la lista
      producto[index].carrito = !producto[index].carrito
      //Actualizo BD
      localStorage.setItem("productos",JSON.stringify(producto));
      listarCarritoTabla();
    }else{
      alert("Proceso Cancelado!")
    }
}

//Funciones para reinciar la propiedad carrito a false al pagar (Modal).
const eliminarTodosDelCarrito = () => {
    producto = producto.map(item => {
        return { ...item, carrito: false };
    });

    // Actualizar localStorage
    localStorage.setItem("productos", JSON.stringify(producto));

    // Mostrar mensaje de carrito vacío
    mostrarCarritoVacio();
    listarCarritoTabla();
}

// Función para validar el formulario (Modal)
const validarFormulario = (event) => {
    const nombreTarjeta = document.getElementById("nombre-tarjeta").value;
    const numeroDeTarjeta = document.getElementById("numeroDeTarjeta").value;
    const caducidadTarjeta = document.getElementById("caducidadTarjeta").value;
    const codigoTarjeta = document.getElementById("codigoTarjeta").value;
    
    const regexNomb = /^[a-zA-Z\s]+$/;
    const regexNro = /^\d{18}$/;
    const regexCadu = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const regexCvv = /^\d{3}$/;


    if (!regexNomb.test(nombreTarjeta)) {
        document.getElementById("error-name").textContent= `Nombre invalido!`
        return false;

    }else{
    
    }

    if (regexNro.test(numeroDeTarjeta)) {
        document.getElementById("error-nro").textContent= `Nombre invalido!`
        return false;
    }else{
    
    }

    if (regexCvv.test(codigoTarjeta)) {
        document.getElementById("error-code").textContent= `Nombre invalido!`
        return false;
    }else{
        
    }

    if (regexCadu.test(caducidadTarjeta)) {
        document.getElementById("error-cadu").textContent= `Nombre invalido!`
        return false;
    }else{
        
    }
    event.preventDefault()
}
   

//Funcion que esta pendiente del evento del boton del modal para que al apretarlo se desaten las funciones realizadas previamente.
document.addEventListener("DOMContentLoaded", () => {
    const myModal = new bootstrap.Modal(document.getElementById("productoModal"));
    listarCarritoTabla();
    // Agregar evento al formulario de pago
    const formPago = document.getElementById("form-pago");
    formPago.addEventListener("submit", (event) => {
        if (validarFormulario()) {
            alert("compra realizada!");
            eliminarTodosDelCarrito();
            myModal.hide();
        }
    });
});

//Realizar funciones de validaciones del modal.
//Realizar esquema y prototipo de la pagina de administracion.

listarCarritoTabla();





