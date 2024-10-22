document.querySelectorAll('.burbuja').forEach(burbuja => {
    burbuja.addEventListener('click', function() {
        this.style.transform = 'scale(2)';
        setTimeout(() => {
            this.style.transform = 'scale(0)';
            // Aquí puedes redirigir al juego
            const juego = this.getAttribute('data-juego');
            window.location.href = juego + '.html';  // Redirige a la página del juego
        }, 300);  // Tiempo de la animación
    });
});
