let heroTitle = document.querySelector(".typing-text");
let text = "Welcome,get more organized";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();