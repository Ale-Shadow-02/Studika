
// Меню бургер
export function mobileMenu() {
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }

    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.header').offsetHeight;
            // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}
