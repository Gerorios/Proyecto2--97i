const marcarCarrito = (id) =>{
    let index = producto.findIndex((item)=>{
      return item.id == id;
    })
    producto[index].carrito = !producto[index].carrito
  
    localStorage.setItem("productos",JSON.stringify(producto));
  
    listarProductos();
  }