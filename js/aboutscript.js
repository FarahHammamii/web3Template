document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".intro h1", { opacity: 1, y: 0, duration: 1 });
    gsap.to(".intro p", { opacity: 1, y: 0, duration: 1, delay: 0.3 });

    gsap.to(".card", { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.3, 
        delay: 1 
    });
});
