// --- Питання + відповіді + теги ---
const questions = [
  {
    text: "🍰 Улюблений десерт дитинства?",
    answers: [
      { text: "Шоколадний торт", tag: "choco" },
      { text: "Фруктовий тарт", tag: "fruit" },
      { text: "Горіхове печиво", tag: "dark" },
      { text: "Медовик", tag: "dessert" }
    ]
  },
  {
    text: "🍊 Який фрукт твій улюблений?",
    answers: [
      { text: "Ягода (малина, чорниця, смородина)", tag: "fruit" },
      { text: "Цитрус (апельсин, лимон, грейпфрут)", tag: "fruit" },
      { text: "Яблуко / груша", tag: "choco" },
      { text: "Сухофрукти (чорнослив, фінік, ізюм)", tag: "dark" }
    ]
  },
  {
    text: "🌸 Які парфуми тобі ближчі?",
    answers: [
      { text: "Chanel Chance Eau Tendre / Dior J’Adore", tag: "fruit" },
      { text: "Dolce & Gabbana Light Blue / Acqua di Gioia", tag: "fruit" },
      { text: "YSL Black Opium / Prada Candy", tag: "choco" },
      { text: "Tom Ford Oud Wood / D&G The One", tag: "dark" }
    ]
  },
  {
    text: "☕ Яка сцена тобі ближча?",
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
    desc: "Яскраві, фруктові, квіткові — для тих, хто любить кислинку 🌸",
    link: "https://bfc24.com/uk/store/product/43",
    img: "images/coffee_placeholder.jpg"
  },
  choco: {
    name: "Brazil Mogiana / Colombia Excelso",
    desc: "Класика з шоколадом і горіхами 🍫",
    link: "https://bfc24.com/uk/store/product/33",
    img: "images/coffee_placeholder.jpg"
  },
  dessert: {
    name: "Arabica Midday / Midnight",
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    link: "https://bfc24.com/uk/store/product/45",
    img: "images/coffee_placeholder.jpg"
  },
  dark: {
    name: "Arabusta Dark / Amber",
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    link: "https://bfc24.com/uk/store/product/29",
    img: "images/coffee_placeholder.jpg"
  },
  classic: {
    name: "Decaf Colombia Huila",
    desc: "Той самий смак, але без кофеїну 🌙",
    link: "https://bfc24.com/uk/store/product/34",
    img: "images/coffee_placeholder.jpg"
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
  const coffeeSet = coffeeProfiles[winner];
  const coffee = coffeeSet.coffees[Math.floor(Math.random() * coffeeSet.coffees.length)];

  resultEl.innerHTML = `
  <h2>Ваша кава — ${coffee.name}</h2>
  <img src="${coffee.img}" alt="${coffee.name}" 
       style="max-width:250px; border-radius:12px; margin:15px 0;">
  <p>${coffee.desc}</p>
  <a href="${coffee.link}" target="_blank">
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
