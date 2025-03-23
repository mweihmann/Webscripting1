let cards = [];
let firstCard = null;
let secondCard = null;

window.onload = restartGame();    

let name = prompt("What is your name?");
document.getElementById("name").innerHTML = name;

let seconds = 0;
setInterval(() => {
    seconds++;
    document.getElementById("time").innerText = seconds;
}, 1000);

function createCards() {
    let board = document.getElementById("spielbereich");
    board.innerHTML = "";

    let imageNames = [];
    for (let i = 1; i <= 8; i++) {
        imageNames.push("card" + i + ".png");
        imageNames.push("card" + i + ".png");
    }
    
    shuffleCards(imageNames);

    for (let i = 0; i < 16; i++) {
        let card = document.createElement("div");
        card.classList.add("karte");
        card.dataset.image = imageNames[i];
        card.onclick = function () {
            turnCard(this);
        };
        board.appendChild(card);
        cards.push(card);
    }
}

function turnCard(element) {
    if (element.style.backgroundImage !== "") return;

    element.style.backgroundImage = "url('pics/" + element.dataset.image + "')";
    checkMatch(element);
}


function checkMatch(element) {
    if (firstCard === null) {
        firstCard = element;
    } else if (secondCard === null) {
        secondCard = element;

        if (firstCard.dataset.image === secondCard.dataset.image) {
            setTimeout(() => {
                firstCard.style.backgroundImage = "url('pics/memoryBgI.png')";
                secondCard.style.backgroundImage = "url('pics/memoryBgI.png')";
                firstCard = null;
                secondCard = null;

                checkWin();
            }, 1000);
        } else {
            setTimeout(() => {
                firstCard.style.backgroundImage = "";
                secondCard.style.backgroundImage = "";
                firstCard = null;
                secondCard = null;
                addTries();
            }, 1000);
        }
    }
}

function checkWin() {
    let allMatched = cards.every(card => card.style.backgroundImage.includes("memoryBgI.png"));

    if (allMatched) {
        setTimeout(() => {
            alert(`Glückwunsch! Du hast das Spiel in ${tries} Versuchen gewonnen!`);
            restartGame();
            tries = 0;
            document.getElementById("tries").innerText = tries;
            seconds = 0;
            document.getElementById("time").innerText = seconds;
        }, 500);
    }
}    

let tries = 0;
function addTries() {
    tries++;
    document.getElementById("tries").innerText = tries;
}    

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function restartGame() {
    cards = [];
    createCards();
}    