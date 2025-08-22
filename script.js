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
    desc: "Яскраві, фруктові, квіткові — для тих, хто любить кислинку й життя у кольорі 🌸",
    coffees: [
      { name: "Ethiopia Gedeb", link: "https://bfc24.com/uk/store/product/43", img: "https://bfc24.com/images/products/gedeb.jpg" },
      { name: "Kenya AA Gikanda Kangocho", link: "https://bfc24.com/uk/store/product/39", img: "https://bfc24.com/images/products/kenya-aa.jpg" },
      { name: "Ethiopia Aleta Wondo", link: "https://bfc24.com/uk/store/product/32", img: "https://bfc24.com/images/products/aleta-wondo.jpg" }
    ]
  },
  choco: {
    desc: "Класика з шоколадом і горіхами — кава для затишку і стабільності 🍫",
    coffees: [
      { name: "Brazil Mogiana", link: "https://bfc24.com/uk/store/product/33", img: "https://bfc24.com/images/products/mogiana.jpg" },
      { name: "Colombia Excelso", link: "https://bfc24.com/uk/store/product/35", img: "https://bfc24.com/images/products/excelso.jpg" }
    ]
  },
  dessert: {
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    coffees: [
      { name: "Arabica Midday", link: "https://bfc24.com/uk/store/product/45", img: "https://bfc24.com/images/products/midday.jpg" },
      { name: "Arabica Midnight", link: "https://bfc24.com/uk/store/product/31", img: "https://bfc24.com/images/products/midnight.jpg" },
      { name: "Arabica Sunrise", link: "https://bfc24.com/uk/store/product/36", img: "https://bfc24.com/images/products/sunrise.jpg" }
    ]
  },
  dark: {
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    coffees: [
      { name: "Arabusta Dark", link: "https://bfc24.com/uk/store/product/29", img: "https://bfc24.com/images/products/arabusta-dark.jpg" },
      { name: "Arabusta Amber", link: "https://bfc24.com/uk/store/product/30", img: "https://bfc24.com/images/products/arabusta-amber.jpg" },
      { name: "Brazil Fazenda Pedra Grande", link: "https://bfc24.com/uk/store/product/41", img: "https://bfc24.com/images/products/pedra-grande.jpg" }
    ]
  },
  classic: {
    desc: "Той самий смак, але без кофеїну 🌙",
    coffees: [
      { name: "Decaf Colombia Huila", link: "https://bfc24.com/uk/store/product/34", img: "https://bfc24.com/images/products/decaf.jpg" }
    ]
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
    <img src="${coffee.img}" alt="${coffee.name}">
    <p>${coffeeSet.desc}</p>
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
