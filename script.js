/* Portfolio JavaScript for Remil Espanola */

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    }

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(function (item) {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
});
