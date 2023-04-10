const gameConfig = [
  {
    choice: "Restart",
    prompt: "A huge dog is running towards you!",
    options: ["Run away", "Try to pet it"]
  },
  {
    choice: "Run away",
    prompt: "1a You run down the hill until the dog stops chasing you, then you slow down. In an unfamiliar area, you look around to see an opening to a trail and an occupied tent with a live campfire outside of it.",
    options: ["Go to the trail", "Go to the tent"]
  },
  {
    choice: "Go to the trail",
    prompt: "2a You follow the trail and find a cave. You quietly sneak into the cave and find a wizard mixing a cauldron. Do you approach him?",
    options: ["Talk to the wizard", "Avoid the wizard"]
  },
  {
    choice: "Talk to the wizard",
    prompt: "3a You approach the wizard, Merlin, and he welcomes you into his cave. He shares that he has been residing in the cave to practice his spells and potion brewing. He says he is making a special brew and pours you a glass.",
    options: ["Drink it", "Refuse to drink it"]
  },
  {
    choice: "Drink it",
    prompt: "4a You drink the potion. It tastes like a crisp glass of fresh apple juice. You feel your body tingling for a moment and you feel lighter. You start to levitate and fly! You thank the wizard for the potion and fly home. END",
    options: ["Restart"]
  },
  {
    choice: "Refuse to drink it",
    prompt: "4b He seems disappointed, but brushes it off. He tells you about his wizarding school and asks you to join him. You accept and you become wizard classmates. END",
    options: ["Restart"]
  },
  {
    choice: "Avoid the wizard",
    prompt: "3b You sneak past the wizard and see a glow on the other side of cave. You follow the glow and find a room full of glowing roses. You observe them and they smell like apples. You pluck one from the ground to keep.",
    options: ["Stay", "Go home"]
  },
  {
    choice: "Stay",
    prompt: "4a You walk around the cave. The wizard finds you admiring the roses. He is friendly and offers you a job to take care of the roses, as he is busy with his wizarding studies. You accept, learning to care for the magical flowers and become a magical herbologist. END",
    options: ["Restart"]
  },
  {
    choice: "Go home",
    prompt: "4b You carefully exit the cave and walk home. You display your glowing rose in a glass case to remind you of your adventure. END",
    options: ["Restart"]
  },
  {
    choice: "Go to the tent",
    prompt: "2b You walk up to the tent and see a woman walk out of the tent. Her name is Sarah. She invites you to sit at the campfire. She tells you a campfire story of buried treasure. You recall a farm that sounds similar to the farm in the story. Do you want to share the treasure location with her?",
    options: ["Tell her", "Don't tell her"]
  },
  {
    choice: "Tell her",
    prompt: "3a You tell her that you recognize the farm. She offers to help you find the treasure. Together, you drive to the farm in the same afternoon. You spend hours walking around the farm, splitting up to hopefully find it faster. Eventually, you see rocks in an X shape in the dirt.",
    options: ["Don't call Sarah", "Call Sarah"]
  },
  {
    choice: "Don't call Sarah",
    prompt: "4a You quietly dig up the dirt, but the dirt is so compacted that you become exhausted and faint. END",
    options: ["Restart"]
  },
  {
    choice: "Call Sarah",
    prompt: "4b Sarah runs over to help you dig. The two of you pry the wooden chest open and see it filled to the top with solid gold coins. You hug each other in celebration. You split the gold coins evenly, roughly giving you $2 million each. END",
    options: ["Restart"]
  },
  {
    choice: "Don't tell her",
    prompt: "3b You and Sarah exchange stories. After a few hours, you say your goodbyes. You drive to the farm and walk around for hours. You spend the next few days searching alone and always leave empty handed. END",
    options: ["Restart"]
  },
  {
    choice: "Try to pet it",
    prompt: "1b The dog licks your hand, and allows you to pet it. You read his collar and his name is Spike. You call him by his name and he wags his tail excitedly. You walk around and Spike follows you.",
    options: ["Go home", "Take Spike for a walk"]
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

act("Restart");