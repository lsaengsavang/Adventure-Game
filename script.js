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
    prompt: "You follow the trail and find a cave. You quietly sneak into the cave, following a strange fog coming from around the corner. You peak and find a wizard mixing a mysterious cauldron. Do you approach him?",
    options: ["Talk to the wizard", "Avoid the wizard"]
  },
  {
    choice: "Talk to the wizard",
    prompt: "You approach the wizard, Merlin, and he welcomes you into his cave. He shares that he has been residing in the cave to practice his spells and potion brewing. He says he is making a special brew and pours you a glass. He doesn't ",
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
    prompt: "You sneak past the wizard and there are two paths in front of you. There is a room with a strange glow and an opening to the outside.",
    options: ["Go to the glow", "Go outside"]
  },
  {
    choice: "Go to the glow",
    prompt: "You follow the glow to find a room full of glowing rose bushes and a patch of pumpkins. You observe the roses, touching the soft petals. You notice that they smell like apples. You pluck one from the ground to keep.",
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
    choice: "Go outside",
    prompt: "You walk outside, blinded by the bright sunlight. Your eyes adjust and you see 3 dragons in front of you! You scream.",
    options: ["Fight", "Panic"]
  },
  {
    choice: "Fight",
    prompt: "You quickly grab a large bucket and rake from behind you, bracing yourself for the fight of your life. The dragons turn to look at you, but seem indifferent. You stand there, confused, as the smallest dragon walks up to you and purrs. It nuzzles against your leg and you pet it affectionately. END",
    options: ["Restart"]
  },
  {
    choice: "Panic",
    prompt: "You stand frozen in place as the dragons turn to look at you. The wizard comes running from the cave and finds you. He explains that these dragons are his pets. He hands you a pumpkin to feed his vegan dragons. They approach you and you pet the beautiful creatures.",
    options: ["Restart"]
  },
  {
    choice: "Go to the tent",
    prompt: "You walk up to the tent and see a woman walk out of it. Her name is Sarah. She invites you to sit at the campfire. She tells you the local legend of a buried treasure guarded by a magical troll. You recall a farm that sounds similar to the farm in the story. She tells you that it is her lifelong dream to find it. Do you ask her to join you or keep it to yourself?",
    options: ["Ask her to join", "Keep it to yourself"]
  },
  {
    choice: "Ask her to join",
    prompt: "She accepts to help you find the treasure. Together, you spend hours walking around the farm but split up to speed up the search. Eventually, you see rocks in an X shape in the dirt. Sarah is no where to be seen. If you call Sarah over, you will have to share the gold with her.",
    options: ["Share with Sarah", "Don't share with Sarah"]
  },
  {
    choice: "Don't share with Sarah",
    prompt: "You quietly dig up the dirt alone, but the dirt is so compacted that you become exhausted and faint. You wake up to a troll standing over you and an empty hole beside you. The troll tells you that he has powers to listen to your selfish thoughts. As punishment, he gave Sarah the treasure.",
    options: ["Return home", "Attack the troll"]
  },
  {
    choice: "Attack the troll",
    prompt: "You lunge at the troll, but he flicks his hand and you freeze in place. He shakes his head at your poor decision making. He turns you into a little mouse.",
    options: ["Restart"]
  },
  {
    choice: "Return home",
    prompt: "You are scolded by the troll for being selfish. You leave empty-handed. As you drive home, you reflect on your behavior. You change for the better after your revelation. Months later, you hear news of Sarah opening a charity in town.",
    options: ["Restart"]
  },
  {
    choice: "Share with Sarah",
    prompt: "Sarah runs over. A troll appears behind you, admiring your companionship and willingness to share your wealth. The troll waves his hand, opening the treasure chest. You see it filled to the top with solid gold coins. You hug each other in celebration. You split the gold coins evenly, roughly giving you $2 million each. END",
    options: ["Restart"]
  },
  {
    choice: "Keep it to yourself",
    prompt: "You and Sarah exchange stories. After a few hours, you say your goodbyes. You spend the next weeks searching the farm alone. You try to recall the description of the path from Sarah's story, but you struggle and never find the treasure.",
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
    options: ["Meet the fairies","Meet the leprechaun"]
  },
  {
    choice: "Meet the fairies",
    prompt: "Fawn flies away and comes back with her friends. They make both of you flower crowns and gently place them on your heads. They fly around you, giggling and playing with Spike. You and Spike leave for the day, but always make time to see your new fairy friends.END ",
    options: ["Restart"]
  },
  {
    choice: "Meet the leprechaun",
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