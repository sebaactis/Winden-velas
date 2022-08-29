// VARIABLES

const carrito = document.querySelector(".carrito")
const listaProductos = document.querySelector(".contenedor-productos")
const contenedorCarrito = document.querySelector(".tablaCarrito tbody")
const limpiarCarrito = document.querySelector("#botonVaciarCarrito")
const finalizarCompra = document.querySelector("#botonFinalizarCompra")
let articulosCarrito = [];

// EVENT LISTENERS
cargarEventos();
function cargarEventos() {

    listaProductos.addEventListener("click", agregarProducto);

    carrito.addEventListener("click", eliminarProducto);

    limpiarCarrito.addEventListener("click", () => {

        articulosCarrito = [];

        limpiarHTML();
    });

    finalizarCompra.addEventListener("click", () => {
        articulosCarrito = [];

        limpiarHTML();
    })
}


// FUNCIONES

function agregarProducto(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const productoSelecionado = e.target.parentElement.parentElement
        datosProducto(productoSelecionado);
        
    }
}

function eliminarProducto(e) {

    if (e.target.classList.contains("borrar-curso")) {
        const productoId = e.target.getAttribute("data-id")

        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId)

        carritoHTML();
    }
}

function datosProducto(producto) {

    const infoProducto = {
        imagen: producto.querySelector("a img").src,
        titulo: producto.querySelector("h5").textContent,
        precio: producto.querySelector(".precio").textContent,
        id: producto.querySelector("button").getAttribute("data-id"),
        cantidad: 1,
    }

    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id)

    if (existe) {
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++
                return producto
            } else
                return producto
        });
        articulosCarrito = [...productos];

    } else {
        articulosCarrito = [...articulosCarrito, infoProducto];
    }



    carritoHTML();
    console.log(articulosCarrito);
}

function carritoHTML() {

    limpiarHTML();

    articulosCarrito.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML =
            `
        <td>${producto.titulo}</td>
        <img src="${producto.imagen}" width="100">
        <td>${producto.precio}</td> 
        <td>${producto.cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${producto.id}"> X </td>
        `

        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML() {
    contenedorCarrito.innerHTML = ""
}