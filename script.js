const quotes = [
  "Do it anyway. Spite counts.",
  "No one is coming. Good. You’ve got this.",
  "You survived worse than this. Unfortunately.",
  "Be brave. Or don’t. Just don’t be boring.",
  "Outlive your enemies. Hydrate.",
  "Lower the bar. Step over it.",
  "You can quit tomorrow. Not today.",
  "Rest if you must. Disappear later.",
  "This is annoying, but so are you. Continue."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

// show one immediately
showQuote();

// click anywhere for another
document.body.addEventListener("click", showQuote);
