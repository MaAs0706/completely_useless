console.log("Script loaded!");
const button = document.getElementById("focus");
console.log("Button element:", button);
if (button) {
    button.addEventListener("click", () => {
        console.log("Button works!");
        const links = [
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Rickroll
            "https://youtube.com/shorts/sQjMZ-PpBPw?si=VeViR6dVbLrr2jOM", // achaaa theeke
            "https://youtube.com/shorts/vN-gjjOLNf8?si=ssbLJ4preHXVL0B4", // kitne tejaswi 
            "https://www.youtube.com/watch?v=j5a0jTc9S10", // Elevator Music
            "https://youtube.com/shorts/FOfUJhC4RnA?si=OVUXbE706DeewXgP", // 7 crore
            "https://youtu.be/paq6sVkkEg0?si=l8Cl-WVIXx4nzR0N", // Why are you gay 
            "https://youtube.com/shorts/YKRQoJDNULU?si=gUIow6lN3H4QK7qT", // kon hai ye log 
            "https://youtube.com/shorts/4-wTdMDjF04?si=QzdUxBHIskmHdEp6" , //aeyy
        ];
        const randomLink = links[Math.floor(Math.random() * links.length)];
        window.location.href = randomLink;
    });
} else {
    console.log("Button not found!");
}



const todoList = document.getElementById("todo-list");

const randomTodos = [
  "Aggressively blink at the ceiling until it blinks back",
  "Microwave ice cubes to assert dominance",
  "Set an alarm to remind yourself to ignore alarms ⏰",
  "Convince a spoon it’s a fork 🍴(improves debating skills)",
  "Hide from your responsibilities in the fridge",
  "Text yourself “we need to talk” and leave it unread",
  "Write a haiku about your last braincell 🧠",
  "Attempt to learn telepathy by glaring really hard at your wall (Trust me it helps)",
  "Declare war on a chair that squeaked too loud",
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



const meetingMessages = [
  "Meeting starting in 3... 2... just kidding.",
  "Team Sync in 10 min. Or not.",
  "You’ve been added to a meeting. No escape.",
  "Meeting scheduled with ‘Yourself’.",
  "Daily Standup right now. Please stand.",
  "Zoom is updating... forever.",
];

function showFakeMeetingPopup() {
  const popup = document.getElementById('meeting-popup');
  const message = document.getElementById('popup-message');
  const randomMessage = meetingMessages[Math.floor(Math.random() * meetingMessages.length)];
  
  message.textContent = randomMessage;
  popup.classList.add('show');

  // Auto-dismiss after 10 seconds (optional)
  setTimeout(() => {
    dismissPopup();
  }, 10000);
}

function dismissPopup() {
  const popup = document.getElementById('meeting-popup');
  popup.classList.remove('show');
}

// Trigger randomly every 30–60 seconds
setInterval(() => {
  if (Math.random() > 0.5) {
    showFakeMeetingPopup();
  }
}, Math.random() * 30000 + 30000); // 30s–60s range
