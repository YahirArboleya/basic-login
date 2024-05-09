// Variable global para almacenar los datos
let datos = [];

// Función para llenar la tabla con los datos
function llenarTabla() {
  const tabla = document.getElementById("tabla-datos");
  const cuerpoTabla = tabla.getElementsByTagName("tbody")[0];
  cuerpoTabla.innerHTML = ""; // Limpiar la tabla antes de llenarla de nuevo

  datos.forEach(function (persona) {
    const fila = cuerpoTabla.insertRow();
    fila.insertCell().textContent = persona.id;
    fila.insertCell().textContent = persona.nombre_completo;
    fila.insertCell().textContent = persona.area_de_adquisicion;
    fila.insertCell().textContent = persona.edad;
    fila.insertCell().textContent = persona.curp;
    fila.insertCell().textContent = persona.cargo;
    fila.insertCell().textContent = persona.domicilio;
    fila.insertCell().textContent = persona.antiguedad;
  });
}

// Función para realizar la búsqueda
function buscar() {
  const inputBusqueda = document.getElementById("input-busqueda");
  const filtro = inputBusqueda.value.toLowerCase(); // Convertir la búsqueda a minúsculas

  // Filtrar los datos para obtener los resultados coincidentes
  const resultados = datos.filter(function (persona) {
    return persona.nombre_completo.toLowerCase().includes(filtro);
  });

  // Mostrar los resultados en la tabla
  datos = resultados; // Actualizar los datos con los resultados de la búsqueda
  llenarTabla();
}
function recargar() {
  fetch("datos.json")
    .then((response) => response.json())
    .then((data) => {
      datos = data; // Almacenar los datos en la variable global
      llenarTabla();
    })
    .catch((error) => console.error("Error al cargar los datos:", error));
}

// Cargar los datos al inicio
fetch("datos.json")
  .then((response) => response.json())
  .then((data) => {
    datos = data; // Almacenar los datos en la variable global
    llenarTabla();
  })
  .catch((error) => console.error("Error al cargar los datos:", error));
