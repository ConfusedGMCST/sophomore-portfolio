const greetings = [
    "Hello!",
    "こんにちは!",
    "Hola!",
    "Guten Tag!",
    "Bonjour!",
    "Ciao!",
    "안녕하세요!",
    "你好!"
];


const greetingElement = document.getElementById("greeting");

let currentIndex = 0;

setInterval(() => {
    greetingElement.style.opacity = "0";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[currentIndex];
        greetingElement.style.opacity = "1";
    }, 300);
}, 2000);