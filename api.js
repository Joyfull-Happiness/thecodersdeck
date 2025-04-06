let mentalBreakActivities = [
  "Learn a short tiktok dance",
  "Learn a step routine",
  "Do a soft life stretch 15-minute session",
  "Your office space is your runway!! Strut like a model, it's your time to shine",
  "PHOTO SHOOT (even if you hate photos, take 10 minutes to see if you get a photo of yourself from a new angle)",
  "Do a power pose in front of a mirror while saying, 'I am the code whisperer!'",
  "Light a candle, put on shea butter, and do a 5-min skin-care body ritual. Healing is power.",
  "Get off the tech! Even techies need a tech break, take 5-10 minutes COMPLETELY OFF technology. Meditate, go for a walk, stretch",
  "Git up out of your seat and take a walk. Listen to music — no texting, no scrolling (try your best)",
  "Do a sun salutation",
  "Do a 5-minute yoga nidra",
  "Drink water or make a cup of tea/coffee mindfully.",
  "Read a few pages of fiction.",
  "Grab a snack with mindfulness",
  "Step outside and get sunlight, focus on your body feeling and absorbing the heat and sunlight",
  "Play semantle with your intuition. Play based on the first thing that pops into your head. Try your best not to think your way to the answer",
  "Watch a 5min comedy skit",
  "Jump rope with an invisible rope for 3 minutes",
  "Walk up and down stairs 3x",
  "Look up tree pose, and really try to achieve that level of balance",
  "Try mirror movements — mimic your reflection slowly",
  "Act out your debugging problem like it’s a Tyler Perry dramatic monologue — full hand gestures.",
  "Pretend you’re being interviewed on 'Black Girls Code: The Documentary' — narrate your coding brilliance.",
  "I am Healthy, I am Happy, I am Wealth, I am Wise (speak this truth to you at least 4x) then dance to your favorite song",
  "Draw something for one minute. DON'T think about what to draw just draw.",
  "Play a game of tic-tac-toe with a coworker... or checkers if you have the time.",
  "Focus on your breath. Breathe in for as long as you can and exhale a little while longer. Now what's your birthday? Focus on your breath that many times. Your birthday in the double digits? Add them all up to get a single-digit number. *If you get bored, play your favorite Solange song.",
  "Do a simple office stretch crossing your arms over one another. Gently flex the tips of your fingers back so the stretch.",
  "Flow of consciousness journaling",
  "Do the 'mirror hype' routine — gas yourself up out loud while dancing or posing: 'I am the QUEEN/KING of code. I can solve any problem!'",
  "Imitate your favorite auntie hyping you up about your success — out loud, with all the flair.",
  "Play 'I'm wealthy, I'm healthy, I'm Happy, I'm whole' — grab a robe, drink water like it’s champagne, strut for no reason.",
  "Create a quick 'affirmation anthem' using lines from your fav Black women artists. Repeat it while moving.",
  "REST!! Seriously DO NOTHING. LIE DOWN AND DO ABSOLUTELY NOTHING.",
  "Walk around while talking to yourself like you’re Issa Rae rapping in the mirror.",
  "Do a guided meditation; pick the first one that comes up if you have to search for one online.",
  "Whisper 'I love myself,' now speak 'I love myself,' now yell 'I love myself.'",
  "Tell your ego 'You need to take a break and be in the passenger seat for a minute' and now let soul take over.",
  "Save your work. Close your laptop screen, do something you absolutely love to do.",
  "Visualize yourself at the beach or by a pool, imagine yourself putting your feet in the water. How does it feel? What do you smell?",
  "Doodle on a piece of paper — stay away from tech... just for 5 minutes.",
  "Invent a mini spy mission – sneak through your house or office like you’re hacking the Matrix IRL.",
  "Shadowbox like you’re fighting bugs with every punch.",
  "Pretend your chair is lava – escape creatively using only 'safe zones' to get across the room.",
  "Build a quick obstacle course using furniture or books and run through it like a ninja.",
  "Balance random objects on your head while walking — perfect for mindfulness and giggles.",
  "Try handstand practice against the wall — flips your perspective literally.",
  "Set a 5-minute timer and clean like you’re defusing a bomb – adrenaline rush included.",
  "Turn on your favorite Afrobeats, dancehall, or R&B track and hit a full-body dance break — waistline included.",
];

function getRandomActivity() {
  let randomIndex = Math.floor(Math.random() * mentalBreakActivities.length);
  return mentalBreakActivities[randomIndex];
}
console.log(getRandomActivity());

function displayRandomActivity() {
  let randomActivity = getRandomActivity();
  let activityDisplay = document.getElementById("activity-display");
  activityDisplay.textContent = randomActivity;
}
// console.log(displayRandomActivity());

window.onload = displayRandomActivity;

document
  .getElementById("random-activity-btn")
  .addEventListener("click", displayRandomActivity);
