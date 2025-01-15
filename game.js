let inventory = [];

function enterMansion() {
    document.getElementById("game-text").innerText = "You enter the mansion. It's dark, and the door slams shut behind you. A hallway stretches before you with a locked door to the right.";
    document.getElementById("choices").innerHTML = `
        <button onclick="exploreHallway()">Explore the hallway</button>
        <button onclick="openDoor()">Try to open the locked door</button>
    `;
}

function leave() {
    document.getElementById("game-text").innerText = "You decide to leave. As you step outside, you feel something cold brush your neck. The mansion calls you back.";
    document.getElementById("choices").innerHTML = `
        <button onclick="enterMansion()">Enter the mansion again</button>
    `;
}

function exploreHallway() {
    document.getElementById("game-text").innerText = "You walk down the hallway and find a dusty old bookshelf. One of the books seems to be slightly out of place.";
    document.getElementById("choices").innerHTML = `
        <button onclick="searchBookshelf()">Search the bookshelf</button>
        <button onclick="returnToHallway()">Return to the hallway</button>
    `;
}

function searchBookshelf() {
    inventory.push('Mysterious Key');
    document.getElementById("game-text").innerText = "You pull the book, and a hidden compartment opens, revealing a key.";
    updateInventory();
    document.getElementById("choices").innerHTML = `
        <button onclick="useKey()">Use the key</button>
        <button onclick="returnToHallway()">Return to the hallway</button>
    `;
}

function useKey() {
    if (inventory.includes('Mysterious Key')) {
        document.getElementById("game-text").innerText = "You use the mysterious key to unlock a door leading to a hidden room. Inside, you find the mansion's dark secrets.";
        document.getElementById("choices").innerHTML = `
            <button onclick="gameEnd()">End Game</button>
        `;
    } else {
        document.getElementById("game-text").innerText = "The door remains locked. You need a key.";
        document.getElementById("choices").innerHTML = `
            <button onclick="returnToHallway()">Return to the hallway</button>
        `;
    }
}

function returnToHallway() {
    document.getElementById("game-text").innerText = "You return to the hallway. The mansion seems to be shifting around you.";
    document.getElementById("choices").innerHTML = `
        <button onclick="exploreHallway()">Explore the hallway again</button>
        <button onclick="openDoor()">Try to open the locked door again</button>
    `;
}

function openDoor() {
    document.getElementById("game-text").innerText = "The door is locked. You need a key.";
    document.getElementById("choices").innerHTML = `
        <button onclick="returnToHallway()">Return to the hallway</button>
    `;
}

function updateInventory() {
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = '';
    inventory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        inventoryList.appendChild(li);
    });
}

function gameEnd() {
    document.getElementById("game-text").innerText = "You've uncovered the mansion's secrets and escaped safely!";
    document.getElementById("choices").innerHTML = `
        <button onclick="restartGame()">Play Again</button>
    `;
}

function restartGame() {
    inventory = [];
    document.getElementById("game-text").innerText = "You stand in front of a spooky mansion. The door creaks open... What will you do?";
    document.getElementById("choices").innerHTML = `
        <button onclick="enterMansion()">Enter the mansion</button>
        <button onclick="leave()">Leave</button>
    `;
    updateInventory();
}
