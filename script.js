window.onload = function () {
  window.scrollTo(0, 0); // Esto llevará el scroll a la parte superior al cargar la página
};

// Función para alternar entre modo claro y oscuro
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (!localStorage.getItem('dark-mode')) {
    localStorage.setItem('dark-mode', 'disabled'); // Modo claro por defecto
  }

  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode'); // Activar modo oscuro si estaba guardado
    darkModeToggle.innerText = '☀️';
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.innerText = '🌙';
  }

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode'); // Cambiar a modo claro
      localStorage.setItem('dark-mode', 'disabled');
      darkModeToggle.innerText = '🌙';
    } else {
      body.classList.add('dark-mode'); // Cambiar a modo oscuro
      localStorage.setItem('dark-mode', 'enabled');
      darkModeToggle.innerText = '☀️';
    }
  });
});

// Efecto de aparición de texto en la sección principal
document.addEventListener("DOMContentLoaded", function () {
  const text1 = document.querySelector('.hero-text h1');
  const text2 = document.querySelector('.hero-text h2:nth-of-type(1)');
  const text3 = document.querySelector('.hero-text h2:nth-of-type(2)');

  text1.style.visibility = 'visible';

  setTimeout(function () {
    text2.style.visibility = 'visible';
  }, 2000);

  setTimeout(function () {
    text3.style.visibility = 'visible';
  }, 4000);

  setTimeout(function () {
    const button = document.querySelector('.hero-text .btn-primary');
    button.style.visibility = 'visible';
  }, 6000);
});

// Funcionalidad de los contenedores de servicios
document.addEventListener("DOMContentLoaded", function () {
  const serviceContainers = document.querySelectorAll('.service-container');

  serviceContainers.forEach((container) => {
    const image = container.querySelector('.service-image');
    const textBox = container.querySelector('.service-text-box');
    const closeButton = container.querySelector('.close-button');

    image.addEventListener('click', function () {
      serviceContainers.forEach((otherContainer) => {
        otherContainer.classList.remove('active');
        otherContainer.querySelector('.service-image').style.display = 'none';
        otherContainer.querySelector('.service-title').style.display = 'none';
        otherContainer.querySelector('.service-description').style.display = 'none';
        otherContainer.querySelector('.service-text-box').style.display = 'none';
      });

      container.classList.add('active');
      image.style.display = 'block';
      textBox.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
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

// Animación de fade-in al hacer scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
});

// Mostrar barra de progreso al hacer scroll
window.addEventListener("scroll", () => {
  const scrollProgress = document.querySelector(".scroll-progress");
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// Ocultar el spinner de carga al cargar la página
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});

// Mostrar elementos de la sección cuando son visibles
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});

// Función de scroll suave al inicio
const scrollToTopButton = document.getElementById("scrollToTopButton");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Control del menú rápido
document.addEventListener("DOMContentLoaded", function () {
  const quickMenu = document.querySelector(".quick-menu");
  const scrollToTopQuickButton = quickMenu.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      quickMenu.style.bottom = "30px"; // Fijo para evitar saltos
      scrollToTopQuickButton.style.display = "flex";
    } else {
      quickMenu.style.bottom = "30px"; // Mantener fijo
      scrollToTopQuickButton.style.display = "none";
    }
  });

  scrollToTopQuickButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});












