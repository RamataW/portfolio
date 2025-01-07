document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});
// Fonction pour vérifier si l'élément est dans la vue
const projectItems = document.querySelectorAll('.project-item');

function checkScroll() {
    projectItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add('in-view');
        } else {
            item.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Vérifie l'état au chargement de la page

// Fonction pour vérifier la visibilité des éléments au scroll
const scrollElements = document.querySelectorAll('.scroll-content p, .video-container');

const elementInView = (el, inView = true) => {
    el.classList.toggle('show-on-scroll', inView);
}

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            elementInView(el, true);
        } else {
            elementInView(el, false);
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // Initial check
