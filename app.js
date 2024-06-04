
 const data = [
   {
     id: 1717508464951,
     title: "Monitor Hkc Antteq 23,8 Full Hd F238m 24 Ips 75 Hz Hdmi Color Negro ",
     price: 250,
     description:"Disfrutá de todas las cualidades que el monitor HKC F238M tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.\n\nUn monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\n\nUna experiencia visual de calidad\nEste monitor de 23.8\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 × 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.",
     category: "Monitores",
     image: "https://http2.mlstatic.com/D_NQ_NP_885380-MLU70876291504_082023-O.webp",
     carrito: false,
   },
   {
     id: 1717508539215,
     title: "Motherboard Gigabyte Amd A520m K V2 Ddr4 Gamer Color Negro",
     price: 50,
     description: "El Motherboard Gigabyte A520M K V2 1.0 es una placa base de la serie A520 de Gigabyte diseñada para procesadores AMD Ryzen de la serie AM4. Esta placa base es una opción económica y de gama media que ofrece un buen rendimiento para sistemas de PC básicos y de nivel de entrada    Algunas de las características clave del Gigabyte A520M K V2 1.0 incluyen soporte para procesadores AMD Ryzen de 3ª generación, hasta 64 GB de memoria DDR4 a 4000 MHz (OC), un socket AM4, un diseño de alimentación de alta calidad, un PCIe 3.0 x16 para tarjetas gráficas, un PCIe 3.0 x1, soporte para dispositivos de almacenamiento M.2, USB 3.2 Gen 1, HDMI, Realtek Gigabit LAN y audio de alta definición.   En general, el Gigabyte A520M K V2 1.0 es una opción sólida para aquellos que buscan construir un sistema de PC básico o de nivel de entrada con un presupuesto limitado. Es importante tener en cuenta que, al ser una placa base de gama media, puede no ofrecer todas las características y capacidades de las placas base de gama alta, pero cumple con las necesidades de la mayoría de los usuarios",
     category: "Placas",
     image: "https://http2.mlstatic.com/D_NQ_NP_692472-MLU73566361403_122023-O.webp",
     carrito: false,
   },
   {
     id: 1717508833494,
     title:
       "Mando Bms Para Play 4 Control Joystick Inalambrico Bla",
     price: 15,
     description:
       "   \n |-| Joystick Inalambrico|-|\n Compatible con Play 4 |-|\n Se entrega con caja|-| \nDiseño Ergonomico |-| Con sistema de vibración incorporado|-| Incluye 1 cable usb  Garantía del vendedor: 3 meses.",
     category: "controles",
     image: "https://http2.mlstatic.com/D_NQ_NP_953394-MLA71772761856_092023-O.webp",

     carrito: false,
   },
   {
     id: 1717508965743,
     title:
       "Fuente de alimentación para PC Aerocool Advanced Technologies Cylon 600W Full Range 600W black 100V/240V",
     price: 75,
     description:
       "Con la fuente de alimentación Aerocool Advanced Technologies 600W Full Range podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. \n Control de temperatura A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento. \n Sin ruido ni distracciones Debido a su funcionamiento silencioso, tu equipo operará minimizando el nivel de ruido, para que tu jornada sea más agradable.",
     category: "Fuente",
     image: "https://http2.mlstatic.com/D_NQ_NP_852987-MLA45975812457_052021-O.webp",

     carrito: false,
   },
   {
    id: 1717509034327,
    title:
      "Disco sólido interno Kingston SA400S37/240G Sa400s 240GB negro ",
    price: 68,
    description:
      "Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional. Al estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas. Confianza ante todo Resguardá todo tipo de información sensible a través de su sistema de seguridad incorporado. Su defensa es impenetrable.",
    category: "Disco-rigido",
    image: "https://http2.mlstatic.com/D_NQ_NP_825890-MLA54124091906_032023-O.webp",

    carrito: false,
  },
   {
     id: 1717509231763,
     title:
       "Tarjeta Gráfica Dual Nvidia Geforce Rtx 3050 6gb ",
     price: 300,
     description:
       "Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.",
     category: "Graficas",
     image: "https://http2.mlstatic.com/D_NQ_NP_636453-MLU75395941796_042024-O.webp",

     carrito: false,
   },
 ];


 localStorage.setItem("productos",JSON.stringify(data));
 
let producto = JSON.parse(localStorage.getItem("productos")) || [];

 let contenedor = document.querySelector("#contenedor");

 const listarProductos = () =>{
   contenedor.innerHTML = "";

   producto.forEach((item) =>{
      let col = document.createElement("div");
      col.classList = "col mb-4"
  

      let card = `<div class="card  border-0 cuerp-card">
      <div class="contenedor-img">
      <img src="${item.image} " class="card-img-top" alt="...">
      </div>
      <div class="card-body">
      <a href="./pages/producto.html?id=${item.id}"><h4 class="card-title text-white text-center" target="_blank">${item.title} </h4></a>
      </div>
      <div class="d-flex w-100 justify-content-between align-items-center p-2 card-icon-btn">
      <div class="m-2 puntero">
      <i class="${item.carrito ? "fa-solid fa-xmark fa-xl bg-dark" : "fa-solid fa-cart-shopping fa-xl"}" onclick="marcarCarrito(${item.id} )" style="color: white;"></i><a href="./pages/producto.html?id=${item.id} " class="btn btn-light mx-2 buton-mas">Ver mas</a>
      </div>
      <div class="m-2" >
      <h3 style="color: greenyellow;" class="precio">$${item.price}</h3>
      </div>
      </div>
  </div>
      `
      col.innerHTML=card;

      contenedor.append(col);
   })
 }

const ordenarPorPrecio = () =>{
  let nuevoarray = producto.map((item) =>{
    return{
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      carrito: item.carrito,
    }
  })
  nuevoarray.sort((a,b) => a.price -b.price)

  producto = nuevoarray;

  localStorage.setItem("productos",JSON.stringify(producto));
  listarProductos();
}

const ordernarAlfabeticamente = () => {
  let nuevoarray = producto.map((item) =>{
    return{
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      carrito: item.carrito,
    }
  })

  nuevoarray.sort((a,b) => {
    if(a.title > b.title ){
      return 1;
    }else if(a.title < b.title){
      return -1;
    }
    else{
      return 0;
    }
  })

  producto = nuevoarray;

  localStorage.setItem("productos",JSON.stringify(producto));
  listarProductos();
}

 
listarProductos();
