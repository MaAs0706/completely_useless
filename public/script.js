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
            "https://youtu.be/paq6sVkkEg0?si=l8Cl-WVIXx4nzR0N", // Why are you gay 
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

// Copy the array so we can remove items as we add them
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

// Timer functionality
let timer = 60;
let timerInterval = null;

document.getElementById("timestart").addEventListener("click", () => {
  let timerStopped = false;
  if (timerInterval !== null || timerStopped) return; // Prevent multiple intervals

  const timerElement = document.getElementById("timer");

  timerInterval = setInterval(() => {
    if (timerStopped) return;

    const chaos = Math.random();

    if (chaos < 0.05) {
      timer += Math.floor(Math.random() * 30 - 15);
      timerElement.innerText = "Calibrating...";
    } else if (chaos < 0.1) {
      timer = 60;
    } else if (chaos < 0.15) {
      timer = Math.floor(Math.random() * 1000 - 500);
    } else {
      timer--;
    }

    timerElement.innerText = `⏳ ${timer}s`;

  }, 1000);
});

document.querySelector(".timeend").addEventListener("click", () => {
  timerStopped = true;

  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  document.getElementById("timer").innerText = "🛑 Timer stopped";
});

// fake pomodoro alerts
const fakePomodoroMessages = [
  "🚨 You failed this Pomodoro!",
  "📱 Time to scroll Instagram again!",
  "😵 Braincell lost detected!",
  "🥱 Stay distracted. You’re doing amazing.",
  "🔔 Just one more YouTube short won’t hurt.",
  "😈 Your focus is a lie.",
  "🤡 Scheduled distraction in 3…2…1…"
];

function showFakePomodoroAlert() {
  const alertBox = document.getElementById("pomodoro-alert");
  const message = document.getElementById("pomodoro-message");
  message.innerText = fakePomodoroMessages[Math.floor(Math.random() * fakePomodoroMessages.length)];
  alertBox.classList.remove("hidden");

  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, 4000); // stays for 4 seconds
}

// Trigger randomly every 30–90 seconds
setInterval(() => {
  if (Math.random() < 0.7) showFakePomodoroAlert();
}, Math.random() * 60000 + 30000);  // between 30s and 90s

// Productivity Stats Section
const stats = [
  { icon: "📱", label: "Instagram Scrolled Time", value: 15, unit: "hrs" },
  { icon: "🧠", label: "Braincells Lost", value: 27 },
  { icon: "💤", label: "Micro-Naps Taken", value: 9 },
  { icon: "🎯", label: "Focus Sessions", value: 12 },
  { icon: "😵‍💫", label: "Fake Productivity Bursts", value: 18 },
  { icon: "📺", label: "YouTube Hours", value: 23 },
  { icon: "🚨", label: "Distractions Defeated", value: 0 },
  { icon: "⏱️", label: "Timer Resets", value: 36 },
  { icon: "🤡", label: "Meetings Attended Mentally", value: 1 },
  { icon: "📖", label: "Tabs Opened With Good Intentions", value: 99 },
  { icon: "📴", label: "Pomodoros Ignored", value: 12 },
  { icon: "📵", label: "App Blocks Bypassed", value: 7 }
];

const grid = document.getElementById("stats-grid");

function animateCount(el, target) {
  let count = 0;
  const increment = target / 50;
  const update = () => {
    count += increment;
    if (count >= target) {
      el.innerText = Math.floor(target);
    } else {
      el.innerText = Math.floor(count);
      requestAnimationFrame(update);
    }
  };
  update();
}



function renderStats() {
  grid.innerHTML = ""; // Clear old ones
  const selected = stats
    .sort(() => 0.5 - Math.random())
    .slice(0, 6); // Show 6 at a time

  selected.forEach(stat => {
    const card = document.createElement("div");
    card.className = "stat-card";

    card.innerHTML = `
      <div class="stat-icon">${stat.icon}</div>
      <div class="stat-value" data-value="${stat.value}">0</div>
      <div class="stat-label">${stat.label}</div>
    `;

    grid.appendChild(card);

    const valEl = card.querySelector(".stat-value");
    animateCount(valEl, stat.value);
  });
}

// Rotate stats every 15 seconds
renderStats();
setInterval(renderStats, 15000);
