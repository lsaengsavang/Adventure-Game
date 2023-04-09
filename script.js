const gameConfig = [
  {
    choice: "Start",
    prompt: "A huge dog runs up to you!",
    options: ["Run", "Hold out your hand"]
  },
  {
    choice: "Run",
    prompt: "You run down the street, but you hit a dead end.",
    options: ["Go back", "Stay"]
  },
  {
    choice: "Hold out your hand",
    prompt: "The dog licks your hand, leaving a thick coating of slobber.",
    options: ["Continue petting the dog", "Wipe off your hand"]
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