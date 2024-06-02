// Obtener referencias a los elementos HTML
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('ocultar');
const mostrarButton = document.getElementById('mostrar');
const contenido = document.getElementById('content');
///  variables para ocultar el sidebar cuando se cambie a otra pagina:

const sidebar_ocultoxdefecto = document.getElementById('sidebar');

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const contenido = document.getElementById('content');

  sidebar.classList.add('d-none');
  contenido.classList.remove('col-md-10', 'col-sm-9');
  contenido.classList.add('col-md-15', 'col-sm-13');
});

 


// Agregar evento de clic al botón "☰/ocultar"             
toggleButton.addEventListener('click', () => {
  sidebar.classList.add('d-none');
  toggleButton.style.display = 'none';
  mostrarButton.style.display = 'block';
  // Modificar las clases de contenido al ocultar la barra lateral
  contenido.classList.remove('col-md-10', 'col-sm-9');
  contenido.classList.add('col-md-15', 'col-sm-13');

});

// Agregar evento de clic al botón "mostrar"
mostrarButton.addEventListener('click', () => {
  sidebar.classList.remove('d-none');
  toggleButton.style.display = 'block';
  mostrarButton.style.display = 'none';
  // Modificar las clases de contenid5o al mostrar la barra lateral
  contenido.classList.remove('col-md-15', 'col-sm-9');
  contenido.classList.add('col-md-10', 'col-sm-9');
});
