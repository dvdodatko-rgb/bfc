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
      { name: "Ethiopia Gedeb", link: "https://bfc24.com/uk/store/product/43", img: "images/ethiopia_gadeb.png" },
      { name: "Kenya AA Gikanda Kangocho", link: "https://bfc24.com/uk/store/product/39", img: "images/kenya_aa.png" }
    ]
  },
  choco: {
    desc: "Класика з шоколадом і горіхами — кава для затишку і стабільності 🍫",
    coffees: [
      { name: "Brazil Mogiana", link: "https://bfc24.com/uk/store/product/33", img: "images/brazil_mogiana.png" },
      { name: "Brazil Fazenda Pedra Grande", link: "https://bfc24.com/uk/store/product/41", img: "images/brazil_fazenda.png" },
      { name: "Colombia Excelso", link: "https://bfc24.com/uk/store/product/35", img: "images/colombia_excelso.png" },
      { name: "Colombia Cauca Popayan", link: "https://bfc24.com/uk/store/product/40", img: "images/columbia_cauca.png" },
      { name: "Mexico El Buho", link: "https://bfc24.com/uk/store/product/38", img: "images/mexico_el_buho.png" }
    ]
  },
  dessert: {
    desc: "Нуга, карамель, солодкий десерт у чашці 🍯",
    coffees: [
      { name: "Arabica Midday", link: "https://bfc24.com/uk/store/product/45", img: "images/midday.png" },
      { name: "Arabica Midnight", link: "https://bfc24.com/uk/store/product/31", img: "images/midnight.png" },
      { name: "Arabica Sunrise", link: "https://bfc24.com/uk/store/product/36", img: "images/sunrise.png" }
    ]
  },
  dark: {
    desc: "Насичена, темна, гірка як життя у понеділок ☠️",
    coffees: [
      { name: "Arabusta Dark", link: "https://bfc24.com/uk/store/product/29", img: "images/dark.png" },
      { name: "Arabusta Amber", link: "https://bfc24.com/uk/store/product/30", img: "images/amber.png" }
    ]
  },
  classic: {
    desc: "Той самий смак, але без кофеїну 🌙",
    coffees: [
      { name: "Decaf Colombia Huila", link: "https://bfc24.com/uk/store/product/34", img: "images/columbia_decaf.png" }
    ]
  }
};

// --- Логіка ---
let currentQ = 0;
let scores = { fruit: 0, choco: 0, dessert: 0, dark: 0, classic: 0 };

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");

function showQuestion() {
  quizEl.innerHTML = `<h2>${questions[currentQ].text}</h2>`;
  questions[currentQ].answers.forEach(a => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => {
      scores[a.tag]++;
      currentQ++;
      if (currentQ < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    quizEl.appendChild(btn);
  });
}

function showResult() {
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const coffeeSet = coffeeProfiles[winner];
  const coffee = coffeeSet.coffees[Math.floor(Math.random() * coffeeSet.coffees.length)];

  result
