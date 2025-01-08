window.onload = function() {
  window.scrollTo(0, 0);  // Esto llevará el scroll a la parte superior
}


// Función para alternar entre modo claro y oscuro
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Forzar inicio en modo claro si no hay registro previo
  if (!localStorage.getItem('dark-mode')) {
    localStorage.setItem('dark-mode', 'disabled'); // Iniciar en modo claro por defecto
  }

  // Verificar si está guardado el modo oscuro en localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode'); // Activar modo oscuro si estaba guardado
    darkModeToggle.innerText = '☀️'; // Mostrar ícono para modo claro
  } else {
    body.classList.remove('dark-mode'); // Asegurar que comience en modo claro
    darkModeToggle.innerText = '🌙'; // Mostrar ícono para modo oscuro
  }

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode'); // Cambiar a modo claro
      localStorage.setItem('dark-mode', 'disabled');
      darkModeToggle.innerText = '🌙'; // Cambiar el ícono a modo oscuro
    } else {
      body.classList.add('dark-mode'); // Cambiar a modo oscuro
      localStorage.setItem('dark-mode', 'enabled');
      darkModeToggle.innerText = '☀️'; // Cambiar el ícono a modo claro
    }
  });
});
