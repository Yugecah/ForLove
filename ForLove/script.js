/* =========================
   LOVE QUESTION
========================= */

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const loveAnswer = document.getElementById("loveAnswer");

let noCount = 0;

yesButton.addEventListener("click", function () {
    loveAnswer.classList.add("show");

    noButton.style.display = "none";

    yesButton.textContent = "I LOVE YOU TOO 💗";
    yesButton.disabled = true;

    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
});


/* =========================
   NO BUTTON
========================= */

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("click", function () {
    noCount++;

    if (noCount === 1) {
        noButton.textContent = "Are you sure? 🥺";
    } else if (noCount === 2) {
        noButton.textContent = "Really? 😭";
    } else if (noCount === 3) {
        noButton.textContent = "Last chance 😭💔";
    } else if (noCount === 4) {
        noButton.textContent = "Think again 🥺";
    } else {
        noButton.textContent = "Okay... 😭";
    }

    moveNoButton();
});


function moveNoButton() {
    const maxX = Math.min(140, window.innerWidth / 3);
    const maxY = 55;

    const x = Math.random() * maxX * 2 - maxX;
    const y = Math.random() * maxY * 2 - maxY;

    noButton.style.transform = `translate(${x}px, ${y}px)`;
}


/* =========================
   AFFIRMATIONS
========================= */

const affirmations = [
    "You are allowed to rest. 🌷",
    "One step at a time is still progress. 🫶",
    "You don't have to solve everything today. 🌙",
    "Your feelings are valid. 💗",
    "Take a breath. You've got this. 🌿",
    "It's okay to have a slow day. ☁️",
    "You are more than your stressful moments. ✨",
    "Be gentle with yourself today. 🧸",
    "You deserve peaceful moments too. 💕",
    "You are doing better than you think. 🌸",
    "It's okay to take things slowly. 🌿",
    "Tomorrow is another chance to begin again. 🌙",
    "You deserve kindness, especially from yourself. 💗",
    "Rest is part of taking care of yourself. 🫶",
    "You don't have to do everything at once. 🌷"
];

const affirmation = document.getElementById("affirmation");
const affirmationButton = document.getElementById("affirmationButton");

affirmationButton.addEventListener("click", function () {
    let random;

    do {
        random =
            affirmations[
                Math.floor(Math.random() * affirmations.length)
            ];
    } while (
        random === affirmation.textContent &&
        affirmations.length > 1
    );

    affirmation.textContent = random;

    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 150);
    }
});


/* =========================
   BREATHING
========================= */

const breathingCircle =
    document.getElementById("breathingCircle");

const breathingButton =
    document.getElementById("breathingButton");

const breathingStatus =
    document.getElementById("breathingStatus");

let breathing = false;
let breathingTimer = null;

breathingButton.addEventListener(
    "click",
    startBreathing
);


function startBreathing() {

    if (breathing) {
        return;
    }

    breathing = true;

    breathingButton.disabled = true;

    breathingButton.textContent =
        "🌿 Breathing...";

    breathingStatus.textContent =
        "Follow the circle slowly. 🌿";

    let inhale = true;

    let elapsed = 0;

    const duration = 32000;

    const cycleDuration = 4000;


    function cycle() {

        if (!breathing) {
            return;
        }

        if (inhale) {

            breathingCircle.textContent =
                "Breathe In 🌿";

            breathingCircle.classList.remove(
                "breathe-out"
            );

            breathingCircle.classList.add(
                "breathe-in"
            );

        } else {

            breathingCircle.textContent =
                "Breathe Out 🌙";

            breathingCircle.classList.remove(
                "breathe-in"
            );

            breathingCircle.classList.add(
                "breathe-out"
            );
        }

        inhale = !inhale;

        elapsed += cycleDuration;

        if (elapsed < duration) {

            breathingTimer =
                setTimeout(
                    cycle,
                    cycleDuration
                );

        } else {

            finishBreathing();

        }
    }

    cycle();
}


function finishBreathing() {

    breathing = false;

    breathingButton.disabled = false;

    breathingButton.textContent =
        "🌬️ Start Again";

    breathingCircle.classList.remove(
        "breathe-in"
    );

    breathingCircle.classList.add(
        "breathe-out"
    );

    breathingCircle.textContent =
        "Well Done 💗";

    breathingStatus.textContent =
        "You did it. Take another peaceful moment. 🌷";

    for (let i = 0; i < 8; i++) {

        setTimeout(
            createHeart,
            i * 150
        );
    }
}


/* =========================
   SURPRISE MESSAGE
========================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const surprise =
    document.getElementById("surprise");


surpriseButton.addEventListener(
    "click",
    function () {

        surprise.classList.add("show");

        surpriseButton.textContent =
            "💗 You Deserve This";

        for (let i = 0; i < 15; i++) {

            setTimeout(
                createHeart,
                i * 120
            );
        }
    }
);


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const volumeButton =
    document.getElementById("volumeButton");

const musicStatus =
    document.getElementById("musicStatus");

let muted = false;


musicButton.addEventListener(
    "click",
    toggleMusic
);


function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(function () {

                musicButton.textContent =
                    "⏸️ Pause Music";

                musicStatus.textContent =
                    "Music is playing. Relax and breathe. 🎧";

            })
            .catch(function () {

                musicStatus.textContent =
                    "Add relaxing-music.mp3 inside the music folder. 🎵";

            });

    } else {

        music.pause();

        musicButton.textContent =
            "🎵 Play Music";

        musicStatus.textContent =
            "Music paused. 🌙";
    }
}


volumeButton.addEventListener(
    "click",
    function () {

        muted = !muted;

        music.muted = muted;

        if (muted) {

            volumeButton.textContent =
                "🔇";

            musicStatus.textContent =
                "Music muted. 🔇";

        } else {

            volumeButton.textContent =
                "🔊";

            musicStatus.textContent =
                "Music volume restored. 🎧";
        }
    }
);


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "heart";


    const hearts = [
        "💗",
        "💕",
        "💖",
        "🌸",
        "✨",
        "🫶",
        "💞",
        "🌷"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        16 + Math.random() * 15 + "px";


    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function () {
            heart.remove();
        },
        8000
    );
}


/* =========================
   RANDOM HEARTS
========================= */

setInterval(
    function () {

        if (Math.random() > 0.4) {
            createHeart();
        }

    },
    2500
);


/* =========================
   INITIAL HEART
========================= */

setTimeout(
    createHeart,
    1500
)
