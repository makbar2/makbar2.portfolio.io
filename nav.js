    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-container');

    toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    });