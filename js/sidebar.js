// Obtener referencias a los elementos HTML
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('ocultar');
const mostrarButton = document.getElementById('mostrar');

// Agregar evento de clic al botón "☰/ocultar"
toggleButton.addEventListener('click', () => {
  sidebar.classList.add('d-none');
  toggleButton.style.display = 'none';
  mostrarButton.style.display = 'block';
});

// Agregar evento de clic al botón "☰/mostrar"
mostrarButton.addEventListener('click', () => {
  sidebar.classList.remove('d-none');
  mostrarButton.style.display = 'none';
  toggleButton.style.display = 'block';
});
