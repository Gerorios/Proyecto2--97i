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

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const marcarCarrito = (id) =>{
    let index = producto.findIndex((item)=>{
      return item.id == id;
    })
    if (producto[index].carrito) {
      alert("Se elimino el producto del carrito")

      producto[index].carrito = !producto[index].carrito
      localStorage.setItem("productos",JSON.stringify(producto));

    }else{
      alert("Se agrego producto al carrito")

      producto[index].carrito = !producto[index].carrito;
      localStorage.setItem("productos",JSON.stringify(producto));
    }
    listarProductos();
  }
const toggleBtn = document.querySelector(".toggle-btn")
const dropdownMenu = document.querySelector(".dropdown_menu")
const openMenu = () =>{
   dropdownMenu.classList.toggle("open")
}



