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
    coffees: [
      { name: "Ethiopia Gedeb", link: "https://bfc24.com/uk/store/product/43" },
      { name: "Kenya AA Gikanda Kangocho", link: "https://bfc24.com/uk/store/product/39" },
      { name: "Ethiopia Aleta Wondo", link: "https://bfc24.com/uk/store/product/32" }
    ],
    desc: "Яскраві, фруктові, квіткові — для тих, хто любить кислинку й життя у кольорі 🌸"
  },
  choco: {
    coffees: [
      { name: "Brazil Mogiana", link: "https://bfc24.com/uk/store/product/33" },
      { name: "Brazil Fazenda Pedra Grande", link: "https://bfc24.com/uk/store/product/41" },
      { name: "Colombia Excelso", link: "https://bfc24.com/uk/store/product/35" },
      { name: "Colombia Cauca Popayan", link: "https://bfc24.com/uk/store/product/40" },
      { name: "Mexico El Buho", link: "https://bfc24.com/uk/store/product/38" }
    ],
    desc: "Класика з шоколадом і горіхами — кава для затишку і стабільності 🍫"
  },
  dessert: {
    coffees: [
      { name: "Arabica Midday", link: "https://bfc24.com/uk/store/product/45" },
      { name: "Arabica Midnight", link: "https://bfc24.com/uk/store/product/31" },
      { name: "Arabica Sunrise", link: "https://bfc24.com/uk/store/product/36" }
    ],
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯"
  },
  dark: {
    coffees: [
      { name: "Arabusta Dark", link: "https://bfc24.com/uk/store/product/29" },
      { name: "Arabusta Amber", link: "https://bfc24.com/uk/store/product/30" }
    ],
    desc: "Насичена, темна, гірка як життя у понеділок ☠️"
  },
  classic: {
    coffees: [
      { name: "Decaf Colombia Huila", link: "https://bfc24.com/uk/store/product/34" }
    ],
    desc: "Той самий смак, але без кофеїну 🌙"
  }
};

// --- Логіка ---
function showResult() {
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const coffeeSet = coffeeProfiles[winner];
  
  // вибираємо рандомну каву зі списку
  const coffee = coffeeSet.coffees[Math.floor(Math.random() * coffeeSet.coffees.length)];

  resultEl.innerHTML = `
    <h2>Ваша кава — ${coffee.name}</h2>
    <p>${coffeeSet.desc}</p>
    <a href="${coffee.link}" target="_blank">
      <button>☕ Замовити</button>
    </a>
  `;
  quizEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

