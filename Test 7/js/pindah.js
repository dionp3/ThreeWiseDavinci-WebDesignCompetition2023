document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const main = document.querySelector('main');
    const defaultView = main.innerHTML;

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = e.target.innerText.toLowerCase();
            if (linkText === 'home') {
                main.innerHTML = defaultView;
            } else {
                fetch(`${linkText}.html`)
                    .then(response => response.text())
                    .then(data => {
                        main.innerHTML = data;
                    })
                    .catch(error => console.error('Error:', error));
            }
        });
    });

    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});
