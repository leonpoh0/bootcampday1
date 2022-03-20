const newDiv = document.createElement("div");

const arrayOfEmojis = [
  "✌",
  "😂",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
];

for (let i = 0; i < arrayOfEmojis.length; i += 1) {
  const btn = document.createElement("button");
  btn.innerText = arrayOfEmojis[i];
  btn.id = i;
  newDiv.appendChild(btn);
}
document.body.appendChild(newDiv);

const emojiContainer = document.createElement("div");
document.body.appendChild(emojiContainer);
emojiContainer.innerText = "";

let chosenEmoji = "";
function btnSelected(i) {
  chosenEmoji = arrayOfEmojis[i];
}

for (let i = 0; i < arrayOfEmojis.length; i += 1) {
  document.getElementById(i).addEventListener("click", () => btnSelected(i));
}

let emojiText = "";

function buttonFunc(j) {
  if (j.keyCode == 38) {
    emojiText += chosenEmoji;
    emojiContainer.innerText = emojiText;
  } else {
    emojiText = emojiText.slice(0, -2);
    emojiContainer.innerText = emojiText;
  }
}

document.addEventListener("keydown", (key) => buttonFunc(key));
