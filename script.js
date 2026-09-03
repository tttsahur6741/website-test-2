const TOTAL_GIFS = 9;
const tungButton = document.getElementById('gif-button');
const gifDisplay = document.getElementById('gif-display');

let recentGifs = [];
let onCooldown = false;

tungButton.addEventListener('click', function() {
    if (onCooldown) return;

    onCooldown = true;

    gifDisplay.style.display = "block";

    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * TOTAL_GIFS) + 1;
    } while (recentGifs.includes(randomNumber) && TOTAL_GIFS > recentGifs.length);

    recentGifs.push(randomNumber);

    if (recentGifs.length > 3) {
        recentGifs.shift();
    }

    gifDisplay.src = "gifs/" + randomNumber + ".gif";

    setTimeout(function() {
        onCooldown = false;
    }, 500);
});