let usuarioRol = 'usuario';

function mostrarOpcionesAdmin() {
    if (usuarioRol === 'admin') {
        document.getElementById('admin-panel').style.display = 'block';
    }
}

window.onload = mostrarOpcionesAdmin;
function agregarLibro() {
    alert("Agregar libro nuevo - Solo admin");
}

function eliminarLibro() {
    alert("Eliminar libro - Solo admin");
}

function buscarLibro() {
    let query = document.getElementById('buscar').value.toLowerCase();
    let resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; 
    
    // Simulando búsqueda en una base de datos
    let librosDisponibles = ["El Principito", "Cien años de soledad", "Don Quijote de la Mancha", "Matar a un ruiseñor", "La Cabaña Misteriosa", "Las Aventuras de Sofía", "El Mundo de los Insectos", "Explorando el Espacio", "La Magia de las Plantas"];
    let librosEncontrados = librosDisponibles.filter(libro => libro.toLowerCase().includes(query));
    
    if (librosEncontrados.length > 0) {
        librosEncontrados.forEach(libro => {
            let li = document.createElement('li');
            li.textContent = libro;
            resultados.appendChild(li);
        });
    } else {
        resultados.innerHTML = '<li>No se encontraron resultados</li>';
    }
}
