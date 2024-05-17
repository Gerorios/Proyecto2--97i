
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");
let nofavs = document.getElementById("contenedor")
let producto = JSON.parse(localStorage.getItem("productos")) || [];
let totalcontenedor = document.getElementById("total-content")

const listarCarrito = () => {
   cuerpoTabla.innerHTML = "";
   totalcontenedor.innerHTML="";
   let productoCarrito = producto.filter((item) => {
       return item.carrito === true;
   });

   if (productoCarrito.length === 0) {
       let cartel = document.createElement("div");
       cartel.classList = "alert alert-danger"
       cartel.innerHTML="<h2> No hay elementos agregados al carrito</h2>"
       nofavs.append(cartel);
   }
   productoCarrito.forEach((item) => {
       let tablerow = document.createElement("tr");
       let contenidoTabla = `
           <td ><img src="${item.image}" alt="" class ="w-50 mx-5"></td>
           <td class = "fs-6">${item.title}"</td>
           <td class = "fs-5" style="color: green">$${item.price}</td>
           <td>
               <div class="d-flex p-2 puntero">
                   <i class="fa fa-trash fa-xl puntero" onclick="eliminarCarrito(${item.id})" aria-hidden="true"></i>
               </div>
           </td>
       `;
       tablerow.innerHTML = contenidoTabla;
       cuerpoTabla.append(tablerow);
   });
   imprimirTotal();
}
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
          <div class="mx-2 caja-boton-continuar">
          <button type="button" class="btn" style="background-color: orangered;" data-bs-toggle="modal" id="boton" data-bs-target="#productoModal" data-bs-whatever="@mdo">Ir a pagar</button>
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
      listarCarrito();
    }else{
      alert("Proceso Cancelado!")
    }
}
listarCarrito();


const myModal = new bootstrap.Modal(document.getElementById("productoModal"));

