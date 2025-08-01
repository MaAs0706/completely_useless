console.log("Script loaded!");
const button = document.getElementById("focus");
console.log("Button element:", button);
if (button) {
    button.addEventListener("click", () => {
        console.log("Button works!");
        const links = [
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Rickroll
            "https://www.youtube.com/watch?v=9Deg7VrpHbM", // Nyan Cat
            "https://www.youtube.com/watch?v=lXMskKTw3Bc", // Crazy Frog
            "https://www.youtube.com/watch?v=j5a0jTc9S10", // Elevator Music
            "https://www.youtube.com/watch?v=ZZ5LpwO-An4", // He-Man Hey Yeah
        ];
        const randomLink = links[Math.floor(Math.random() * links.length)];
        window.location.href = randomLink;
    });
} else {
    console.log("Button not found!");
}