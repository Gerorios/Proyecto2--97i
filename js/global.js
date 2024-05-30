class productos {
  constructor(id,title,price,description,category,image,carrito=false){
     this.id = id;
     this.title = title;
     this.price = price;
     this.description = description;
     this.category = category;
     this.image = image;
     this.carrito = carrito;

  }
}

const marcarCarrito = (id) =>{
    let index = producto.findIndex((item)=>{
      return item.id == id;
    })
    producto[index].carrito = !producto[index].carrito
  
    localStorage.setItem("productos",JSON.stringify(producto));
  
    listarProductos();
  }

const toggleBtn = document.querySelector(".toggle-btn")
const dropdownMenu = document.querySelector(".dropdown_menu")
const openMenu = () =>{
   dropdownMenu.classList.toggle("open")
}



