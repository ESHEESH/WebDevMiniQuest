// Level 3 
let level = 3;

function levelUp() {
    if (level < 6) {
        level++;
        document.getElementById("levelNum").innerText = level;
        document.getElementById("badge").innerText = "Current Level: " + level;
        document.getElementById("text").innerText = "Great! Keep going!";
    } else {
        document.getElementById("text").innerText = "Max level reached!";
    }
}

// Level 4 
function validateForm() {
    let input = document.getElementById("username");
    let message = document.getElementById("feedback");

    if (input.value.trim() === "") {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        message.innerHTML = "❌ Please enter your name.";
        message.className = "text-danger mt-2";
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        message.innerHTML = "✅ Hello, " + input.value + "!";
        message.className = "text-success mt-2";
    }
}

// Level 5 
let marioCoins = 0;

function addCoin() {
    marioCoins++;
    document.getElementById("coinCount").innerText = marioCoins;
}

function removeCoin() {
    if (marioCoins > 0) {
        marioCoins--;
        document.getElementById("coinCount").innerText = marioCoins;
    }
}

function resetCoins() {
    marioCoins = 0;
    document.getElementById("coinCount").innerText = marioCoins;
}

// Level 6

function chooseDoor(playerChoice) {
    let result = document.getElementById("result");

 
    let correctDoor = Math.floor(Math.random() * 3) + 1;

    if (playerChoice === correctDoor) {
        result.innerHTML = "🎉 You found the treasure!";
        result.className = "text-success mt-3";
    } else {
        result.innerHTML = "💀 Empty room! Try again!";
        result.className = "text-danger mt-3";
    }
}
