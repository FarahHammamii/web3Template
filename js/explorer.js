document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".blockchain-image", { opacity: 1, x: 0, duration: 1 });
    gsap.to(".blockchain-info", { opacity: 1, x: 0, duration: 1, delay: 0.3 });
    
    let score = 0;
    let targetScore = 87;  // Example score
    let scoreElement = document.getElementById("score");

    let scoreInterval = setInterval(() => {
        if (score < targetScore) {
            score++;
            scoreElement.textContent = score;
        } else {
            clearInterval(scoreInterval);
        }
    }, 20);

    gsap.to(".score-circle", { opacity: 1, scale: 1, duration: 0.8, delay: 1 });

    document.querySelector(".horizontal-scroll").addEventListener("mouseenter", () => {
        document.querySelector(".scroll-content").style.animationPlayState = "paused";
    });

    document.querySelector(".horizontal-scroll").addEventListener("mouseleave", () => {
        document.querySelector(".scroll-content").style.animationPlayState = "running";
    });
});
