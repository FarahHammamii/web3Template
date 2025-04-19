document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

// Check if THREE.js is available
if (typeof THREE === "undefined") {
    console.error("THREE.js not found");
    return;
}

// Ensure canvas exists
const canvas = document.getElementById("bg");
if (!canvas) {
    console.error("Canvas with ID 'bg' not found");
    return;
}

// Background animation using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
console.log("Renderer initialized:", renderer);

// Add stronger lighting
const pointLight = new THREE.PointLight(0xffffff, 4, 200);
pointLight.position.set(30, 30, 30);
scene.add(pointLight);

const bottomLight = new THREE.PointLight(0xaaaaaa, 2, 200);
bottomLight.position.set(-30, -30, 30);
scene.add(bottomLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

// Add TorusKnot with white color
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,  // White color for better visibility
    emissive: 0xffffff, 
    emissiveIntensity: 0.5, 
    metalness: 1,  
    roughness: 0.05 
});

const torusKnot = new THREE.Mesh(geometry, material);
torusKnot.position.x = 35; 
torusKnot.position.y = 10; // Adjusted position

scene.add(torusKnot);
camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}

console.log("Starting animation loop");
animate();


    // Resize handling
    window.addEventListener("resize", function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    // Typing animation
    const textElement = document.getElementById("typing-text");
    const words = ["Blockchain Innovations", "Decentralized Future", "Secure Transactions"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeAnimation() {
        const currentWord = words[index];
        const displayedText = currentWord.substring(0, charIndex);
        textElement.textContent = displayedText;

        if (!isDeleting) {
            if (charIndex < currentWord.length) {
                charIndex++;
                setTimeout(typeAnimation, 100);
            } else {
                isDeleting = true;
                setTimeout(typeAnimation, 1000);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeAnimation, 50);
            } else {
                isDeleting = false;
                index = (index + 1) % words.length;
                setTimeout(typeAnimation, 500);
            }
        }
    }

    typeAnimation();


});
function toggleChat() {
    alert("Chatbot feature coming soon!"); // Replace with chat logic
}
