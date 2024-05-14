let contenedorTabla = document.querySelector("#contenedor-tabla");
let cuerpoTabla = document.querySelector("#cuerpo-tabla");

let producto = JSON.parse(localStorage.getItem("productos")) || [];

const listarCarrito = () =>{
    cuerpoTabla.innerHTML = "";
     let productoCarrito = producto.filter((item)=>{
        return item.favorito == true;
     }) 
     productoCarrito.forEach((item) =>{
        if (productoCarrito.length > 0) {
            let tablerow = document.createElement("tr");
            let contenidoTabla = `
             <td scope="row">${item.title} </td>
             <td><img src="${item.image}" class="w-50 h-25" ></td>
             <td class="fs-5">$${item.price}</td>
             <td>
             <div class="d-flex p-2">
             <i class="fa fa-trash fa-xl puntero onclick="eliminarCarrito(${item.id})" aria-hidden="true"></i>
             </div>
             </td>
            `
            tablerow.innerHTML=contenidoTabla;
            cuerpoTabla.append(tablerow);   
         }
         else{

         }
     })
}

const eliminarCarrito = (id) =>{
   let carritoDelete = producto.filter((item) =>{
      return item.id != id;
   })
   let validacion = confirm("Seguro que desea eliminar de su carrito?")
   if(validacion){
      producto = [...carritoDelete];
      localStorage.setItem("productos",JSON.stringify(producto));
   }else{
      alert("Operacion cancelada!")
   }
   listarCarrito();
   console.log(carritoDelete);
}

listarCarrito();