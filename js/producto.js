const parameter = new URLSearchParams(location.search);

const idProducto = parameter.get("id");

let contenedor = document.getElementById("contenedor");

let producto = JSON.parse(localStorage.getItem("productos")) || [];

const traerDatos = () =>{
    let productos = producto.find((item) => item.id == idProducto);

    let col = document.createElement("div");
    col.classList="row mb-3";
    let contenido = `
    <div class="col contenedor-izquierda">
    <div id="contenedor-imagen-producto"><img src="${productos.image} " width="600" alt="" ></div>
    </div>
   <div class="col">
     <div class="row mb-3">
        <div class="col contenedor-derecha">
            <div class="border-1">
                <div class="border-4"><h2 class="text-white text-center fw-bold">${productos.title} </h2></div>
                <hr>
                <h3 class="text-white fw-bold">Tipo: ${productos.category}</h3>     
                <hr>
                <h3 class="text-white fw-bold">Precio de contado: <span id="precio-producto">$${productos.price} </span></h3>
                <hr>
                <h3 class="text-white fw-bold">Descripcion del producto:</h3><span id="description-producto">${productos.description}</span>
           </div>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <button type="button"  id="boton-carrito-producto"  >Añadir el producto al carrito</button>
        </div>
    </div>
    `
    col.innerHTML=contenido;
    contenedor.append(col);
}


traerDatos();


{/* <div class="row mb-3">
<div class="col">
    <img src="" width="600" alt="">
</div>
<div class="col">
    <div class="row mb-3">
        <div class="col">
            <div class="border-1">
                <div class="border-4"><h3 class="text-white text-center fw-bold">Titulo</h3></div>
                <hr>
                <h3 class="text-white fw-bold">Tipo:</h3>     
                <hr>
                <h3 class="text-white fw-bold">Precio de contado:$</h3>
                <hr>
                <h3 class="text-white fw-bold">Descripcion del producto:</h3>
           </div>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <button type="button"  id="boton-carrito-producto"  >Añadir el producto al carrito</button>
        </div>
    </div>

</div>
</div> */}