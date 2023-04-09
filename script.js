const gameConfig = [
  {
    choice: "Start",
    prompt: "A dragon is in front of you!",
    options: ["Run", "Fight"]
  },
  {
    choice: "Run",
    prompt: "There's a wall in front of you.",
    options: ["Climb", "Go around"]
  },
  {
    choice: "Fight",
    prompt: "The dragon breathes fire!",
    options: ["Duck", "Jump"]
  }
];

const prompt = document.querySelector(".prompt");
const dropDown = document.querySelector(".drop-down");
const enterButton = document.querySelector(".enter-button");

function act(choice) {
  prompt.textContent = gameConfig.filter(
    config => config.choice === choice
  )[0].prompt;
  dropDown.innerHTML = gameConfig
    .filter(config => config.choice === choice)[0]
    .options.map(option => `<option value="${option}">${option}</option>`)
    .join("");
}

enterButton.addEventListener("click", () => act(dropDown.value));

act("Start");