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
      { name: "Ethiopia Gedeb", link: "https://bfc24.com/uk/store/product/43", img: "https://api.bfc24.com/storage/shop-product-main/195/mf999YisFaaYB4lXpj7HJojNa47NMUt1rGYvlV8x.png" },
      { name: "Kenya AA Gikanda Kangocho", link: "https://bfc24.com/uk/store/product/39", img: "https://api.bfc24.com/storage/shop-product-main/194/63whZfXTOUJShWGRK2U4KV65LLpIEdEwIHlJa0XF.png" },
      { name: "Ethiopia Aleta Wondo", link: "https://bfc24.com/uk/store/product/32", img: "https://api.bfc24.com/storage/shop-product-main/189/jrRSQe1OyVqBqTGY2Mh3JjCO6iQS2kkr47JT8fyB.png" }
    ]
  },
  choco: {
    desc: "Класика з шоколадом і горіхами — кава для затишку і стабільності 🍫",
    coffees: [
      { name: "Brazil Mogiana", link: "https://bfc24.com/uk/store/product/33", img: "https://api.bfc24.com/storage/shop-product-main/190/xDqjZ3SgFp8SCuc3UWYiNDH9xuQc2n8e04KJvga9.png" },
      { name: "Colombia Excelso", link: "https://bfc24.com/uk/store/product/35", img: "https://api.bfc24.com/storage/shop-product-main/192/9t76oqSZr51UdsEpD1COeO5UjkhiguQ031Yv6G4l.png" }
    ]
  },
  dessert: {
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    coffees: [
      { name: "Arabica Midday", link: "https://bfc24.com/uk/store/product/45", img: "https://api.bfc24.com/storage/shop-product-main/200/9RehDnUZlBYeQfEMLPJ0QGnWtGQyaMf3orvtfygU.png" },
      { name: "Arabica Midnight", link: "https://bfc24.com/uk/store/product/31", img: "https://api.bfc24.com/storage/shop-product-main/188/SHWEji2TlS5is367f6dJx9s5VEe3DC0U0FNEypqK.png" },
      { name: "Arabica Sunrise", link: "https://bfc24.com/uk/store/product/36", img: "https://api.bfc24.com/storage/shop-product-main/202/UrZHj6l5OPsd4uzbToHo4C0UDpCVTA4ZqCY4wBOO.png" }
    ]
  },
  dark: {
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    coffees: [
      { name: "Arabusta Dark", link: "https://bfc24.com/uk/store/product/29", img: "https://api.bfc24.com/storage/shop-product-main/186/AqwGc64mT81pRoP3IHBPLVdXzgT8yO6UmlwR2gTW.png" },
      { name: "Arabusta Amber", link: "https://bfc24.com/uk/store/product/30", img: "https://api.bfc24.com/storage/shop-product-main/187/79ZUpSBxx4Z0RP4GHsEd9ayAWsHxmkOLcth7j638.png" },
      { name: "Brazil Fazenda Pedra Grande", link: "https://bfc24.com/uk/store/product/41", img: "https://api.bfc24.com/storage/shop-product-main/204/IT8G9pHXx73qkFTcoRaNsbP41p4wFAZlhhqoWGJy.jpg" }
    ]
  },
  classic: {
    desc: "Той самий смак, але без кофеїну 🌙",
    coffees: [
      { name: "Decaf Colombia Huila", link: "https://bfc24.com/uk/store/product/34", img: "https://api.bfc24.com/storage/shop-product-main/191/yCJkbyRhJ7sElqA1yMI5dauOkbXq3Y5gAUGcLDQS.png" }
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
