# Alura Geek - Aplicación de Gestión de Productos

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## **Descripción del Proyecto**

Alura Geek es una aplicación diseñada para gestionar productos de una tienda en línea. Está construida utilizando tecnologías modernas como Node.js, HTML, CSS y JavaScript. Además, utiliza [JSON-Server](https://github.com/typicode/json-server) como API para manejar las operaciones de lectura, escritura y eliminación de productos desde un archivo `db.json`.

## **Características**

- 📦 **Listar productos:** Muestra todos los productos almacenados en el archivo `db.json`.
- ➕ **Agregar productos:** Permite agregar nuevos productos con un título, imagen y precio.
- ❌ **Eliminar productos:** Posibilidad de eliminar un producto de la lista mediante un botón dinámico.

## **Requisitos Previos**

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 16.18.0 o superior).
- [npm](https://www.npmjs.com/) (viene con Node.js).

## **Instrucciones de Configuración**

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd ALURAGEEK-DAVID-REYES-DEVELOP
   ```

3. Instala JSON-Server globalmente:

   ```bash
   npm install -g json-server
   ```

4. Inicia el servidor JSON-Server:

   ```bash
   json-server --watch db.json --port 3001
   ```

   Esto iniciará el servidor en la siguiente ruta:

   ```
   http://localhost:3001/productos
   ```

## **Estructura del Proyecto**

```
├── index.html              # Página principal de la aplicación
├── css
│   └── styles.css         # Estilos principales
├── img                    # Carpeta con imágenes del proyecto
├── js
│   ├── conexion_API.js    # Conexión con la API JSON-Server
│   ├── mostrarProductos.js # Lógica para mostrar los productos
│   └── eliminarProductos.js # Lógica para eliminar productos
├── pages                  # Páginas adicionales del proyecto
├── db.json                # Base de datos local simulada
├── LICENSE                # Licencia del proyecto
├── package.json           # Configuración de dependencias
├── package-lock.json      # Información detallada de dependencias
└── README.md              # Documentación del proyecto
```

## **Uso de la Aplicación**

### **1. Listar Productos**

Los productos se mostrarán automáticamente al cargar la página principal. La información proviene de la API `http://localhost:3001/productos`.

### **2. Agregar Productos**

Puedes agregar un nuevo producto desde el formulario disponible. Al agregar un producto, se envía una solicitud `POST` a la API y se actualiza automáticamente la lista de productos.

### **3. Eliminar Productos**

Cada producto tiene un botón de eliminación con el ícono de una papelera. Al hacer clic en este botón:

1. Se enviará una solicitud `DELETE` a la API para eliminar el producto.
2. El producto desaparecerá de la lista automáticamente.

## **Tecnologías Utilizadas**

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![JSON-Server](https://img.shields.io/badge/JSON--Server-323330?style=for-the-badge&logo=json&logoColor=white)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## **Próximas Mejoras**

- ✅ Validación avanzada de formularios al agregar productos.
- 🌐 Soporte para múltiples idiomas.
- 📊 Paginación y filtrado de productos.

## **Contribuciones**

¡Las contribuciones son bienvenidas! Si deseas contribuir, abre un *pull request* o crea un *issue*.

---

**¡Gracias por usar Alura Geek! Esperamos que disfrutes del proyecto!** 🎉

