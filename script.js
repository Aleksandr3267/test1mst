window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('close')
      setTimeout(() => loader.style.opacity = '0', 600);

    setTimeout(() => {
            // Функция для отслеживания видимости элемента
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Когда элемент попадает в область видимости, добавляем класс visible
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Останавливаем наблюдение за этим элементом
            }
            });
        }, { threshold: 0.5 });
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => {
            observer.observe(container);
        });

        const textAnimate = document.querySelectorAll('.text-animate');
        textAnimate.forEach(container => {
            observer.observe(container);
        });
    }, 1000);
    }, 2000);
  });


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
  });


  const burger = document.getElementById("burger");
  const nav = document.querySelector(".nav");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  
  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
    overlay.classList.remove("active");
  });
  