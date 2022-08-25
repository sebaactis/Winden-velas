// VARIABLES

const carrito = document.querySelector(".carrito")
const listaProductos = document.querySelector(".contenedor-productos")
const contenedorCarrito = document.querySelector(".tablaCarrito tbody")
const limpiarCarrito = document.querySelector("#botonVaciarCarrito")
const finalizarCompra = document.querySelector("#botonFinalizarCompra")

// EVENT LISTENERS
cargarEventos();
function cargarEventos() {
    listaProductos.addEventListener("click", agregarProducto);
}





// FUNCIONES

function agregarProducto(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const productoSelecionado = e.target.parentElement.parentElement
        datosProducto(productoSelecionado);
    }
}

function datosProducto(producto) {
    console.log(producto);

    const infoProducto = {
        imagen: producto.querySelector("a img").src,
        titulo: producto.querySelector("h5").textContent,
        precio: producto.querySelector(".precio").textContent,
        id: producto.querySelector("button").getAttribute("data-id"),
        cantidad: 1,
    }

    console.log(infoProducto);
}