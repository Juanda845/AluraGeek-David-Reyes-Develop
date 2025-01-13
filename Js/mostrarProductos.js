import { conexion_API } from "./conexion_API.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(id, titulo, imagem, precio) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${imagem}" alt="${titulo}" class="imagen-producto">
        <div class="card__info">
            <h2 class="title-producto">${titulo}</h2>
            <div class="card__informacion">
                <span class="precio">${precio}</span>
                <button class="delete-button" data-id="${id}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

async function listarProductos() {
    try {
        const listaAPI = await conexion_API.listarProductos();
        lista.innerHTML = ''; // Limpiar el contenido del contenedor

        // Crear tarjetas dinámicamente
        listaAPI.forEach(producto =>
            lista.appendChild(crearCard(producto.id, producto.titulo, producto.imagem, producto.precio))
        );
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
    }
}

listarProductos();

export { lista, listarProductos };