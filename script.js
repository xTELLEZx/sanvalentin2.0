document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openCard");
    const closeButton = document.getElementById("closeCard");
    const envelope = document.querySelector(".envelope");
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const music = document.getElementById("loveMusic");

    openButton.addEventListener("click", function () {
        envelope.style.transform = "rotate(-5deg)";
        flap.style.transform = "rotateX(180deg)";
        letter.style.transform = "translateY(0)";
        letter.style.opacity = "1";
        openButton.style.display = "none"; 
        music.play(); // 🔊 Inicia la música al abrir la carta
    });
    

    closeButton.addEventListener("click", function () {
        envelope.style.transform = "rotate(0deg)";
        flap.style.transform = "rotateX(0)";
        letter.style.transform = "translateY(100%)";
        letter.style.opacity = "0";
        setTimeout(() => {
            openButton.style.display = "block"; // Mostrar botón otra vez
            music.pause();
        }, 1000);
    });

    function createTulip() {
        const tulip = document.createElement("div");
        tulip.classList.add("tulip");
        tulip.innerHTML = "🌷";
    
        // Posición más centrada (entre el 20% y 80% del ancho de la pantalla)
        tulip.style.left = Math.random() * 60 + 20 + "vw"; 
    
        // Posición en la parte inferior para que suban
        tulip.style.bottom = "-50px"; 
    
        // Duración aleatoria para que no suban al mismo tiempo
        tulip.style.animationDuration = Math.random() * 3 + 3 + "s";
    
        document.body.appendChild(tulip);
    
        // Eliminar después de 5 segundos
        setTimeout(() => {
            tulip.remove();
        }, 5000);
    }
    
    // Hacer que los tulipanes aparezcan cada 0.8 - 1.5 segundos de manera aleatoria
    setInterval(createTulip, Math.random() * 700 + 800);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
    
        // Posición aleatoria en la pantalla
        heart.style.left = Math.random() * 100 + "vw";
    
        // Tiempo aleatorio de animación para que no suban todos igual
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
        document.body.appendChild(heart);
    
        // Eliminar después de que desaparezcan
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Hacer que los corazones aparezcan aleatoriamente cada 0.6 - 1.2 segundos
    setInterval(createHeart, Math.random() * 600 + 600);
    
    
});
