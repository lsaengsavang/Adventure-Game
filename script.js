const gameConfig = [
  {
    choice: "Restart",
    prompt: "A huge dog is running towards you!",
    options: ["Run away", "Try to pet it"]
  },
  {
    choice: "Run away",
    prompt: "You run down the hill until the dog stops chasing you, then you slow down. In an unfamiliar area, you look around to see an opening to a trail and an occupied tent with a live campfire outside of it.",
    options: ["Go to the trail", "Go to the tent"]
  },
  {
    choice: "Go to the trail",
    prompt: "You follow the trail and find a cave. You quietly sneak into the cave and find a wizard mixing a cauldron. Do you approach him?",
    options: ["Talk to the wizard", "Avoid the wizard"]
  },
  {
    choice: "Talk to the wizard",
    prompt: "You approach the wizard, Merlin, and he welcomes you into his cave. He shares that he has been residing in the cave to practice his spells and potion brewing. He says he is making a special brew and pours you a glass.",
    options: ["Drink it", "Refuse to drink it"]
  },
  {
    choice: "Drink it",
    prompt: "You drink the potion. It tastes like a crisp glass of fresh apple juice. You feel your body tingling for a moment and you feel lighter. You start to levitate and fly! You thank the wizard for the potion and fly home. END",
    options: ["Restart"]
  },
  {
    choice: "Refuse to drink it",
    prompt: "He seems disappointed, but brushes it off. He tells you about his wizarding school and asks you to join him. You accept and you become wizard classmates. END",
    options: ["Restart"]
  },
  {
    choice: "Avoid the wizard",
    prompt: "You sneak past the wizard and see a glow on the other side of cave. You follow the glow and find a room full of glowing roses. You observe them and they smell like apples. You pluck one from the ground to keep.",
    options: ["Stay", "Go home"]
  },
  {
    choice: "Stay",
    prompt: "You walk around the cave. The wizard finds you admiring the roses. He is friendly and offers you a job to take care of the roses, as he is busy with his wizarding studies. You accept, learning to care for the magical flowers and become a magical herbologist. END",
    options: ["Restart"]
  },
  {
    choice: "Go home",
    prompt: "You carefully exit the cave and walk home. You display your glowing rose in a glass case to remind you of your adventure. END",
    options: ["Restart"]
  },
  {
    choice: "Go to the tent",
    prompt: "You walk up to the tent and see a woman walk out of the tent. Her name is Sarah. She invites you to sit at the campfire. She tells you a campfire story of buried treasure. You recall a farm that sounds similar to the farm in the story. Do you want to share the treasure location with her?",
    options: ["Tell her", "Don't tell her"]
  },
  {
    choice: "Tell her",
    prompt: "You tell her that you recognize the farm. She offers to help you find the treasure. Together, you drive to the farm in the same afternoon. You spend hours walking around the farm, splitting up to hopefully find it faster. Eventually, you see rocks in an X shape in the dirt.",
    options: ["Don't call Sarah", "Call Sarah"]
  },
  {
    choice: "Don't call Sarah",
    prompt: "You quietly dig up the dirt, but the dirt is so compacted that you become exhausted and faint. END",
    options: ["Restart"]
  },
  {
    choice: "Call Sarah",
    prompt: "Sarah runs over to help you dig. The two of you pry the wooden chest open and see it filled to the top with solid gold coins. You hug each other in celebration. You split the gold coins evenly, roughly giving you $2 million each. END",
    options: ["Restart"]
  },
  {
    choice: "Don't tell her",
    prompt: "You and Sarah exchange stories. After a few hours, you say your goodbyes. You drive to the farm and walk around for hours. You spend the next few days searching alone and always leave empty handed. END",
    options: ["Restart"]
  },
  {
    choice: "Try to pet it",
    prompt: "The dog licks your hand, and allows you to pet it. You read his collar and his name is Spike. You call him by his name and he wags his tail excitedly. You walk around a lake and Spike follows you. You stop for a moment while Spike sniffs around, but wanders off.",
    options: ["Follow Spike", "Call Spike to come back"]
  },
  {
    choice: "Follow Spike",
    prompt: "He leads you to a little box on the ground. You hold him back, afraid of what the object might be. Upon further investigation, you discover it's a tiny house! You look closer and see a tiny flicker of light on the inside. Spike tries to push past you to get to the house. Do you let him get to house?",
    options: ["Let him","Don't let him"]
  },
  {
    choice: "Let him",
    prompt: `Spike runs towards the house and sniffs aggressively, shaking the tiny house. You see the door open and a tiny fairy screams! It waves it's hand, releasing a puff of glittery dust into Spike's face. The door closes and Spike is dazed, but after a few moments, remains unharmed. Do you interogate the fairy or avoid conflict?`,
    options: ["Interogate the fairy","Avoid conflict"]
  },
  {
    choice: "Interogate the fairy",
    prompt: "The fairy opens the door, apologizing. It was startled and accidentally charmed Spike. The fairy, named Fawn, gives Spike an antidote to reverse the charm. Fawn is sweet and caring to animals. You become friends and you offer to take Fawn home to live with you. Fawn accepts. You, Spike, and Fawn go home to live together. END",
    options: ["Restart"]
  },
  {
    choice: "Avoid conflict",
    prompt: `During the walk home, Spike starts to cough. You grow concerned as the coughing lasts a few minutes. You ask, "Are you okay?" You hear a voice respond, "Yes, I'm fine." Spike spoke! The fairy seems to have charmed Spike into being able to speak. You take him home and have interesting conversations. END`,
    options: ["Restart"]
  },
  {
    choice: "Don't let him",
    prompt: "You continue to hold him back. The tiny door opens, revealing a little fairy! She cautiously flies over to you. Her name is Fawn. She tells you about her fairy friends and a leprechaun who also lives at the lake.",
    options: ["Visit her friends","Visit the leprechaun"]
  },
  {
    choice: "Visit her friends",
    prompt: "Fawn flies away and comes back with her friends. They make both of you flower crowns and gently place them on your heads. They fly around you, giggling and playing with Spike. You and Spike leave for the day, but always make time to see your new fairy friends.END ",
    options: ["Restart"]
  },
  {
    choice: "Visit the leprechaun",
    prompt: "Fawn takes you down to the leprechaun's home. She introduces you, and he welcomes you with open arms. You are amazed with his interior design skills, and he offers to decorate your house. You take him up on his offer and he leaves you with a beautiful cottagecore home. END",
    options: ["Restart"]
  },
  {
    choice: "Call Spike to come back",
    prompt: "Spike comes running back to you. You continue walking and find a small home. You knock on the door, and a leprechaun opens the door! He invites you inside. His name is Albie, and he just finished baking an apple pie. He shares a slice with you, while he gives you a tour of his home. You see a room with a golden statues and gold coins.",
    options: ["Ask about the gold statues","Ask about the gold coins"]
  },
  {
    choice: "Ask about the gold statues",
    prompt: "Albie shows you his collection of awards he won during the Leprechaun Olympics. He is a professional pickle ball player. He offers to be your pickle ball mentor. Do you accept?",
    options: ["Learn pickle ball","Refuse"]
  },
  {
    choice: "Learn pickle ball",
    prompt: "You and Albie practice pickle ball for months to compete in a pickle ball tournament. You win numerous awards, thanks to your mentor. END",
    options: ["Restart"]
  },
  {
    choice: "Refuse",
    prompt: `"No worries, it's not for everyone" he says. He tells you stories of his competitions and he gives you the recipe for his amazing apple pie. END`,
    options: ["Restart"]
  },
  {
    choice: "Ask about the gold coins",
    prompt: "Albie tells you that after every rainfall, the leprechauns have a gold hunt. They race to the end of the rainbow and the winner gets the gold. He asks if you would like to join during the next hunt, but warns that the other leprachauns are competitive and violent.",
    options: ["Join the gold hunt","Pass"]
  },
  {
    choice: "Join the gold hunt",
    prompt: "You wait for the next rainy day and join Albie in the gold hunt. Due to your human size, you carry Ablie and move faster than the other teams. You beat everyone to the end of the rainbow and win the gold prize! Albie gives you the entire pot of gold, because he has plenty of his own. END",
    options: ["Restart"]
  },
  {
    choice: "Pass",
    prompt: `Albie tells you that he is a frequent winner of the gold hunt, and has plenty of gold already. He fills up a small pouch with a handful of gold coins and hands it to you. "Here, you need it more than I do." END`,
    options: ["Restart"]
  },
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