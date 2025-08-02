const quotes = [
  "“Why do today what you can postpone forever?”",
  "“Productivity is for people with goals. I'm just here for the vibes.”",
  "“Wake up. Check phone. Panic. Repeat.”",
  "“Dream big. Nap often.”",
  "“If at first you don’t succeed, redefine success.”",
  "“Hard work never killed anyone... but why risk it?”",
  "“You miss 100% of the naps you don’t take.”",
  "“One does not simply... finish a to-do list.”",
  "Why do today what you can panic about tomorrow?",
  "Progress is overrated. Let's nap instead.",
  "If you ignore your problems long enough, they might go away... or multiply.",
  "Success is just failure that got tired.",
  "I was going to take over the world, but I hit snooze.",
  "Procrastination: because nothing says productivity like avoiding everything.",
  "Hard work never killed anyone, but I’m not taking chances.",
  "Dream big. Then immediately forget what you dreamed about.",
  "If Plan A fails, relax. The rest of the alphabet has 25 more letters to ruin.",
  "Why run when you can dramatically walk in the wrong direction?",
  "Time you enjoyed wasting was still time you definitely wasted.",
  "Be yourself. Unless you’re supposed to be doing something else.",
  "I put the ‘pro’ in procrastinate.",
  "Let the universe take the wheel. It can’t be worse than my to-do list.",
  "Don't aim for the stars when your bed is right there."
];

function newQuote() {
  const quoteElement = document.getElementById("quote");
  const random = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[random];
}

document.getElementById("chaos").addEventListener("click", () => {
    window.location.href = "https://youtube.com/shorts/AITn2AJolIQ?si=9K7l49sqz913Ai8I";
})