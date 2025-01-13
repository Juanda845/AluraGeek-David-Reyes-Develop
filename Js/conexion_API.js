async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/productos');

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function enviarProducto(titulo, imagem, precio) {
    const conexion = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            imagem: imagem,
            precio: precio
        })
    });
    const conexionConvertida = await conexion.json();

    if (!conexion.ok) {
        throw new Error('Ha ocurrido un error al enviar el producto');
    }

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!conexion.ok) {
        throw new Error('Ha ocurrido un error al eliminar el producto');
    }

    return 'Producto eliminado correctamente';
}

export const conexion_API = {
    listarProductos,
    enviarProducto,
    eliminarProducto
}
