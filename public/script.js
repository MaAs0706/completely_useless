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



const todoList = document.getElementById("todo-list");

const randomTodos = [
  "Organize your sock drawer by color 🧦",
  "Google 'How to pet a shark' 🦈",
  "Rewatch that one meme for the 10th time 🤣",
  "Scroll through 2019 Instagram posts 📱",
  "Start learning how to fly a ufo 🛸",
  "Build a pillow fort 🏰",
  "Search for your kitchen cleaner online 🕵️",
  "Make a playlist for your cat 🐱",
  "Count how many tabs you have open 🔍",
  "Attempt to balance a spoon on your nose 🥄"
];

// Clone the array so we can safely modify it
let remainingTodos = [...randomTodos];

function addRandomTodo() {
  if (remainingTodos.length === 0) {
    console.log("All random To-Dos have been added!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingTodos.length);
  const task = remainingTodos.splice(randomIndex, 1)[0]; // remove and get

  const newItem = document.createElement("li");
  newItem.textContent = task;
  todoList.appendChild(newItem);
}

// Adds one immediately when the page loads
addRandomTodo();

// Then keep adding every 10 seconds
const interval = setInterval(() => {
  addRandomTodo();

  // Stop once all tasks are added
  if (remainingTodos.length === 0) {
    clearInterval(interval);
  }
}, 10000);
