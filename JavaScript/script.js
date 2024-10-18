const navbar = document.querySelector('.navbar');
        const menuHamburguer = document.querySelector('.menu-hamburguer');
        const nav = document.querySelector('nav');
        
        menuHamburguer.addEventListener('click', () => {
            navbar.classList.toggle('show-menu');
        });