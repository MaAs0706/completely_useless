const quotes = [
  "“Why do today what you can postpone forever?”",
  "“Productivity is for people with goals. I'm just here for the vibes.”",
  "“Wake up. Check phone. Panic. Repeat.”",
  "“Dream big. Nap often.”",
  "“If at first you don’t succeed, redefine success.”",
  "“Hard work never killed anyone... but why risk it?”",
  "“You miss 100% of the naps you don’t take.”",
  "“One does not simply... finish a to-do list.”"
];

function newQuote() {
  const quoteElement = document.getElementById("quote");
  const random = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[random];
}

document.getElementById("chaos").addEventListener("click", () => {
    window.location.href = "https://youtube.com/shorts/AITn2AJolIQ?si=9K7l49sqz913Ai8I";
})