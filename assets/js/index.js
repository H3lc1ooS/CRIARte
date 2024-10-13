const menu = document.getElementById('menu');
const cta = document.getElementById('cta');

window.addEventListener('scroll', function() {
    const menuPosition = menu.getBoundingClientRect();
    const ctaPosition = cta.getBoundingClientRect();

    // Verifica se o topo da seção cta passou pela altura do menu
    if (ctaPosition.top <= menu.offsetHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});
