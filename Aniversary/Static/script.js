// ===============================
// SCROLL KE GALERI
// ===============================

function scrollToMemories() {
    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// SURAT CINTA
// ===============================

function openLetter() {

    const envelope = document.getElementById("envelope");
    const hint = document.getElementById("clickHint");

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        hint.innerHTML = "❤️ Floo, Surat ini untukmu ❤️";
    } else {
        hint.innerHTML = "💌 Klik amplop untuk membuka";
    }
}


// ===============================
// MUSIK
// ===============================

const music = document.getElementById("music");

function toggleMusic() {

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }

}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 700);