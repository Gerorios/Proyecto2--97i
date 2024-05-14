
let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");

let producto = JSON.parse(localStorage.getItem("productos")) || [];

const listarCarrito = () =>{
    cuerpoTabla.innerHTML = "";
     let productoCarrito = producto.filter((item)=>{
        return item.favorito === true;
     }) 
     console.log(productoCarrito);
     productoCarrito.forEach((item) =>{
        if (productoCarrito.length > 0) {
            let tablerow = document.createElement("tr");
            let contenidoTabla = `
             <td scope="row">${item.title} </td>
             <td><img src="${item.image}" class="w-50 h-25" ></td>
             <td class="fs-5">$${item.price}</td>
             <td>
             <div class="d-flex p-2 puntero">
             <i class="fa fa-trash fa-xl puntero" onclick="eliminarCarrito(${item.id})" aria-hidden="true"></i>
             </div>
             </td>
            `
            tablerow.innerHTML = contenidoTabla;
            cuerpoTabla.append(tablerow);   
         }
         else{
            contenedorTabla.innerHTML="";
         }
     })
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