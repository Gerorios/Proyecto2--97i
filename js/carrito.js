
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");
let nofavs = document.getElementById("contenedor");

let producto = JSON.parse(localStorage.getItem("productos")) || [];

const listarCarrito = () => {
   cuerpoTabla.innerHTML = "";
   let productoCarrito = producto.filter((item) => {
       return item.favorito === true;
   });

   if (productoCarrito.length === 0) {
       let cartel = document.createElement("div");
       cartel.classList = "alert alert-danger"
       cartel.innerHTML="<h2> No hay favoritos agregados</h2>"
       nofavs.append(cartel);
   }
   productoCarrito.forEach((item) => {
       let tablerow = document.createElement("tr");
       let contenidoTabla = `
           <td ><img src="${item.image}" alt="" class ="w-25"></td>
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
}


const eliminarCarrito = (id) =>{
   let index = producto.findIndex((item)=>{
      return item.id == id;
    })
    let validacion = confirm("Seguro que desea eliminar el producto del carrito?");
    if(validacion){
      producto[index].favorito = !producto[index].favorito
  
      localStorage.setItem("productos",JSON.stringify(producto));
      listarCarrito();
    }else{
      alert("Proceso Cancelado!")
    }
}
listarCarrito();