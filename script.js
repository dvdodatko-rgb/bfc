// --- Питання + відповіді + теги ---
const questions = [
  {
    text: "🍰 Улюблений десерт дитинства?",
    answers: [
      { text: "Трубочка зі згущеним", tag: "dessert" },
      { text: "Вафельний торт", tag: "choco" },
      { text: "Лимонний тарт", tag: "fruit" },
      { text: "Шоколадний торт", tag: "choco" },
      { text: "Бите скло", tag: "fruit" }
    ]
  },
  {
    text: "🍊 Який фрукт купуєте найчастіше?",
    answers: [
      { text: "Яблуко", tag: "classic" },
      { text: "Апельсин", tag: "fruit" },
      { text: "Гранат", tag: "fruit" },
      { text: "Банан", tag: "dessert" },
      { text: "Слива", tag: "dark" }
    ]
  },
  {
    text: "🌸 Який парфум поставили б на полицю?",
    answers: [
      { text: "Light Blue D&G", tag: "fruit" },
      { text: "Black Opium YSL", tag: "choco" },
      { text: "Bianco Latte Giardini", tag: "dessert" },
      { text: "Dior Poison", tag: "dark" },
      { text: "Lost Cherry Tom Ford", tag: "fruit" }
    ]
  },
  {
    text: "☕ Яка сцена вам ближча?",
    answers: [
      { text: "Середземна фієста", tag: "fruit" },
      { text: "Прогулянка після дощу", tag: "fruit" },
      { text: "Затишний плед і книга", tag: "choco" },
      { text: "Ранковий коворкінг", tag: "dark" }
    ]
  }
];

// --- Профілі кави ---
const coffeeProfiles = {
  fruit: {
    name: "Ethiopia Gedeb / Kenya AA",
    desc: "Яскраві, фруктові, квіткові — для тих, хто любить кислинку й життя у кольорі 🌸",
    link: "https://bfc24.com/product/ethiopia?ref="
  },
  choco: {
    name: "Brazil / Colombia Excelso",
    desc: "Класика з шоколадом і горіхами — кава для затишку і стабільності 🍫",
    link: "https://bfc24.com/product/brazil?ref="
  },
  dessert: {
    name: "Arabica Midday / Midnight",
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    link: "https://bfc24.com/product/midday?ref="
  },
  dark: {
    name: "Arabusta Dark / Amber",
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    link: "https://bfc24.com/product/arabusta-dark?ref="
  },
  classic: {
    name: "Decaf Colombia Huila",
    desc: "Той самий смак, але без кофеїну 🌙",
    link: "https://bfc24.com/product/decaf?ref="
  }
};

// --- Логіка ---
let currentQ = 0;
let scores = { fruit: 0, choco: 0, dessert: 0, dark: 0, classic: 0 };

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