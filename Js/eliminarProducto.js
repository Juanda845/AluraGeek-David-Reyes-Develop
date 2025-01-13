import { conexion_API } from "./conexion_API.js";
import { lista } from "./mostrarProductos.js";

function agregarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll('.delete-button');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', async () => {
            const idProducto = boton.dataset.id; // Obtener el ID del producto
            const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');
            if (!confirmacion) return;

            try {
                await conexion_API.eliminarProducto(idProducto); // Llamar a la API para eliminar
                alert('Producto eliminado correctamente');
                boton.closest('.card').remove(); // Eliminar la tarjeta del DOM
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
                alert('No se pudo eliminar el producto.');
            }
        });
    });
}

// Agregar eventos después de que se rendericen los productos
lista.addEventListener('DOMSubtreeModified', () => {
    agregarEventosEliminar();
});

agregarEventosEliminar();