const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");

yesButton.addEventListener("click", () => {
    response.innerHTML = `
        I knew it! ❤️🥺<br>
        I love you so much! 💕<br>
        <span style="font-size: 18px;">
            Now take a deep breath and relax. 🌸
        </span>
    `;

    yesButton.style.display = "none";
    noButton.style.display = "none";
});

noButton.addEventListener("click", () => {
    response.textContent = "Hmm... try again 😭❤️";
});


