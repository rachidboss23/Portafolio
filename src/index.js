// Esperar a que el DOM esté completamente cargado
// para ejecutar los scripts después de que la página se haya renderizado.
document.addEventListener("DOMContentLoaded", function () {
    // Agregar un evento para detectar el desplazamiento de la página
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar"); // Seleccionar la barra de navegación

        // Si el usuario se ha desplazado más de 50 píxeles, agregar la clase "scrolled"
        // para modificar su estilo (por ejemplo, hacerla más pequeña o cambiar el fondo)
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Script para el desplazamiento de los certificados
// Permite hacer scroll horizontal en la sección de certificados usando botones

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevCert"); // Botón de desplazamiento hacia la izquierda
    const nextBtn = document.getElementById("nextCert"); // Botón de desplazamiento hacia la derecha
    const wrapper = document.querySelector(".certificados-wrapper"); // Contenedor de certificados
    
    let scrollAmount = 0;
    const scrollStep = 300; // Cantidad de píxeles que se desplazará por clic
    
    // Mover hacia la izquierda cuando se presiona el botón correspondiente
    prevBtn.addEventListener("click", function () {
        wrapper.scrollLeft -= scrollStep;
    });
    
    // Mover hacia la derecha cuando se presiona el botón correspondiente
    nextBtn.addEventListener("click", function () {
        wrapper.scrollLeft += scrollStep;
    });
});

// Script para activar la animación de aparición de la sección "Educación y Habilidades"
// cuando el usuario hace scroll y la sección entra en la vista.
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelector(".educacion-habilidades-container"); // Selecciona la sección específica

    function handleScroll() {
        const sectionPos = sections.getBoundingClientRect().top; // Obtiene la posición relativa de la sección
        const windowHeight = window.innerHeight; // Obtiene la altura de la ventana

        // Si la sección está dentro del área visible, se agrega la clase "aparecer"
        if (sectionPos < windowHeight - 100) {
            sections.classList.add("aparecer");
            window.removeEventListener("scroll", handleScroll); // Se elimina el evento para evitar repeticiones
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al cargar por si la sección ya es visible
});