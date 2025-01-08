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

document.addEventListener("DOMContentLoaded", function() {
  const text1 = document.querySelector('.hero-text h1');
  const text2 = document.querySelector('.hero-text h2:nth-of-type(1)'); // Primer h2
  const text3 = document.querySelector('.hero-text h2:nth-of-type(2)'); // Segundo h2 (frase "Service VIP")

  // Se aplica el efecto BOOM a la primera frase
  text1.style.visibility = 'visible';
  
  // Después de 2 segundos, activamos la animación de la segunda frase
  setTimeout(function() {
    text2.style.visibility = 'visible';
  }, 2000);  // 2 segundos después del primer efecto
  
  // Después de 4 segundos, activamos la animación de la tercera frase
  setTimeout(function() {
    text3.style.visibility = 'visible';
  }, 4000);  // 4 segundos después del segundo efecto

  // Mostrar el botón "En savoir plus" después de que la última frase se haya mostrado
  setTimeout(function() {
    const button = document.querySelector('.hero-text .btn-primary');
    button.style.visibility = 'visible'; // Aparece el botón
  }, 6000);  // Después de que las tres frases han aparecido
});




document.addEventListener("DOMContentLoaded", function () {
  const serviceContainers = document.querySelectorAll('.service-container');

  serviceContainers.forEach((container, index) => {
    const image = container.querySelector('.service-image');
    const title = container.querySelector('.service-title');
    const description = container.querySelector('.service-description');

    image.addEventListener('click', function () {
      serviceContainers.forEach((otherContainer) => {
        const otherImage = otherContainer.querySelector('.service-image');
        const otherTitle = otherContainer.querySelector('.service-title');
        const otherDescription = otherContainer.querySelector('.service-description');

        if (otherContainer !== container) {
          otherImage.style.display = 'none';
          otherTitle.style.display = 'none';
          otherDescription.style.display = 'none';
        }
      });

      image.style.display = 'block';
      title.style.display = 'block';
      description.style.display = 'block';
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const serviceContainers = document.querySelectorAll('.service-container');
  const closeButtons = document.querySelectorAll('.close-button');

  serviceContainers.forEach((container) => {
    const image = container.querySelector('.service-image');
    const textBox = container.querySelector('.service-text-box');

    image.addEventListener('click', function () {
      // Ocultar todas las demás secciones
      serviceContainers.forEach((otherContainer) => {
        otherContainer.classList.remove('active');
        otherContainer.querySelector('.service-image').style.display = 'none';
        otherContainer.querySelector('.service-title').style.display = 'none';
        otherContainer.querySelector('.service-description').style.display = 'none';
        otherContainer.querySelector('.service-text-box').style.display = 'none';
      });

      // Mostrar solo la imagen y cuadro de texto del contenedor seleccionado
      container.classList.add('active');
      image.style.display = 'block';
      textBox.style.display = 'block';
    });

    // Funcionalidad del botón "Regresar"
    const closeButton = container.querySelector('.close-button');
    closeButton.addEventListener('click', function () {
      // Restaurar todas las imágenes, títulos y descripciones
      serviceContainers.forEach((otherContainer) => {
        otherContainer.classList.remove('active');
        otherContainer.querySelector('.service-image').style.display = 'block';
        otherContainer.querySelector('.service-title').style.display = 'block';
        otherContainer.querySelector('.service-description').style.display = 'block';
        otherContainer.querySelector('.service-text-box').style.display = 'none';
      });
    });
  });
});

















