const marcarCarrito = (id) =>{
    let index = producto.findIndex((item)=>{
      return item.id == id;
    })
    producto[index].favorito = !producto[index].favorito
  
    localStorage.setItem("productos",JSON.stringify(producto));
  
    listarProductos();
  }