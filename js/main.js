// Global JavaScript logic for CYBERHAWK AI

document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips and popovers if any (Bootstrap)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    // Add hover sound effect logic (optional, commenting out to avoid annoying users, but leaving structure)
    /*
    const hoverElements = document.querySelectorAll('.btn-neon, .btn-neon-purple, .glass-panel');
    const hoverSound = new Audio('assets/hover.mp3'); // Assuming asset exists
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // hoverSound.currentTime = 0;
            // hoverSound.play().catch(e => {}); 
        });
    });
    */

    // Simple scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.style.opacity = 0; // hide initially
        observer.observe(el);
    });
});
