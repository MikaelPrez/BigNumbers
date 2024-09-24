// Array de objetos que contiene las imágenes y sus precios
let images = [
    { url: 'https://via.placeholder.com/300?text=Image+1', price: 100 },
    { url: 'https://via.placeholder.com/300?text=Image+2', price: 200 },
    { url: 'https://via.placeholder.com/300?text=Image+3', price: 150 },
    { url: 'https://via.placeholder.com/300?text=Image+4', price: 50 },
    { url: 'https://via.placeholder.com/300?text=Image+5', price: 300 }
];

// Variables globales para las imágenes actuales y la puntuación
let leftImage = {};
let rightImage = {};
let score = 0;

// Inicializa el juego cuando la página se carga
window.onload = function() {
    initializeGame();
};

// Inicializa el juego
function initializeGame() {
    score = 0; // Reinicia la puntuación
    document.getElementById('score').textContent = score; // Actualiza la puntuación
    document.getElementById('game-over').classList.add('hidden'); // Oculta la pantalla de "Game Over"
    document.getElementById('game-board').classList.remove('hidden'); // Muestra el tablero del juego
    setRandomImages(); // Establece imágenes aleatorias
}

// Establece imágenes aleatorias para el juego
function setRandomImages() {
    // Selecciona una imagen aleatoria para la izquierda
    leftImage = images[Math.floor(Math.random() * images.length)];
    do {
        // Selecciona una imagen aleatoria para la derecha
        rightImage = images[Math.floor(Math.random() * images.length)];
    } while (rightImage === leftImage); // Asegura que las imágenes no sean las mismas

    // Actualiza las imágenes
    document.getElementById('left-image').src = leftImage.url;
    document.getElementById('right-image').src = rightImage.url;
}

// Maneja la adivinanza del usuario
function makeGuess(guess) {
    const isCorrect = (guess === 'higher' && rightImage.price > leftImage.price) ||
                      (guess === 'lower' && rightImage.price < leftImage.price);

    if (isCorrect) {
        score++; // Incrementa la puntuación
        document.getElementById('score').textContent = score; // Actualiza la puntuación
        leftImage = rightImage; // Mueve la imagen de la derecha a la izquierda
        setRandomImages(); // Establece una nueva imagen para la derecha
    } else {
        endGame(); // Termina el juego si la adivinanza es incorrecta
    }
}

// Termina el juego
function endGame() {
    document.getElementById('game-board').classList.add('hidden');
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('final-score').textContent = score;
}

// Reinicia el juego
function restartGame() {
    initializeGame(); // Re-inicializa el juego
}
