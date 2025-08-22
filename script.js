// --- Питання + відповіді + теги ---
const questions = [
  {
    text: "🍰 Який десерт тебе манить найбільше?",
    answers: [
      { text: "Шоколадний торт", tag: "choco" },
      { text: "Фруктовий тарт", tag: "fruit" },
      { text: "Горіхове печиво", tag: "nut" },
      { text: "Медовик", tag: "sweet" }
    ]
  },
  {
    text: "🍊 Який фрукт твій улюблений?",
    answers: [
      { text: "🫐 Ягода (малина, чорниця, смородина)", tag: "fruit" },
      { text: "🍋 Цитрус (апельсин, лимон, грейпфрут)", tag: "acid" },
      { text: "🍏 Яблуко / груша", tag: "classic" },
      { text: "🍇 Сухофрукти (чорнослив, фінік, ізюм)", tag: "dark" }
    ]
  },
  {
    text: "🎭 Який настрій у тебе зараз?",
    answers: [
      { text: "🌞 Легкість і свіже повітря", tag: "filter" },
      { text: "🌆 Динаміка великого міста", tag: "espresso" },
      { text: "🌌 Глибокі роздуми і тиша", tag: "dark" },
      { text: "💖 Турбота про себе", tag: "decaf" }
    ]
  },
  {
    text: "🎶 З якою музикою ти б випив каву?",
    answers: [
      { text: "🎻 Джаз / класика", tag: "fruit" },
      { text: "🎸 Рок / інді", tag: "nut" },
      { text: "🎹 Поп / лаунж", tag: "choco" },
      { text: "🥁 Техно / реп", tag: "dark" }
    ]
  },
  {
    text: "🥛 Яку текстуру напою ти любиш?",
    answers: [
      { text: "🫖 Легку, як чай", tag: "filter" },
      { text: "☁️ Кремову, оксамитову", tag: "sweet" },
      { text: "🍫 Сиропову і густу", tag: "dark" },
      { text: "🍎 Соковиту і фруктову", tag: "fruit" }
    ]
  },
  {
    text: "🌸 Які парфуми тобі ближчі?",
    answers: [
      { text: "Chanel Chance Eau Tendre, Dior J’Adore, Gucci Bloom", tag: "flower" },
      { text: "Dolce & Gabbana Light Blue, Acqua di Gioia, Versace Bright Crystal", tag: "acid" },
      { text: "YSL Black Opium, Mugler Angel, Prada Candy", tag: "choco" },
      { text: "Tom Ford Oud Wood, Armani Code, D&G The One", tag: "nut" }
    ]
  }
];

// --- Профілі кави ---
const coffeeProfiles = {
  fruit: {
    name: "Ethiopia Gedeb / Kenya AA",
    desc: "Яскраві, фруктові, квіткові — для тих, хто любить кислинку й життя у кольорі 🌸",
    link: "https://bfc24.com/uk/store/product/43" // Gedeb
  },
  choco: {
    name: "Brazil Mogiana / Colombia Excelso",
    desc: "Класика з шоколадом і горіхами — кава для затишку і стабільності 🍫",
    link: "https://bfc24.com/uk/store/product/33" // Mogiana
  },
  dessert: {
    name: "Arabica Midday / Midnight",
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    link: "https://bfc24.com/uk/store/product/45" // Midday
  },
  dark: {
    name: "Arabusta Dark / Amber",
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    link: "https://bfc24.com/uk/store/product/29" // Dark
  },
  classic: {
    name: "Decaf Colombia Huila",
    desc: "Той самий смак, але без кофеїну 🌙",
    link: "https://bfc24.com/uk/store/product/34" // Decaf
  }
};


// --- Логіка ---
let currentQ = 0;
let scores = {};

Object.keys(coffeeProfiles).forEach(k => scores[k] = 0);

const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  quizEl.innerHTML = `<h2>${questions[currentQ].text}</h2>`;
  questions[currentQ].answers.forEach(a => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => {
      scores[a.tag]++;
      nextBtn.classList.remove("hidden");
    };
    quizEl.appendChild(btn);
  });
  nextBtn.classList.add("hidden");
}

function showResult() {
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const coffee = coffeeProfiles[winner];
  const ref = new URLSearchParams(window.location.search).get("ref") || "default";
  resultEl.innerHTML = `
    <h2>Ваша кава — ${coffee.name}</h2>
    <p>${coffee.desc}</p>
    <a href="${coffee.link}${ref}" target="_blank">
      <button>☕ Замовити</button>
    </a>
  `;
  quizEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentQ++;
  if (currentQ < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

showQuestion();
