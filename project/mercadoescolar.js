let usuarioRol = 'usuario';

function mostrarOpcionesAdmin() {
    if (usuarioRol === 'admin') {
        document.getElementById('admin-panel').style.display = 'block';
    }
}

window.onload = mostrarOpcionesAdmin;

function agregarTienda(nombreTienda) {
    if (usuarioRol === 'admin') {
        const tienditasContainer = document.getElementById('tienditasContainer');
        const nuevaTienda = document.createElement('div');
        nuevaTienda.className = 'tienditas';
        nuevaTienda.innerHTML = `<h3 class="titulo-seccion">${nombreTienda}</h3>`;
        tienditasContainer.appendChild(nuevaTienda);
    }
}

function eliminarTienda(tiendaElement) {
    if (usuarioRol === 'admin' && tiendaElement) {
        tiendaElement.remove();
    }
}
