// --- Питання + відповіді + теги ---
const questions = [
  {
    text: "🍰 Улюблений десерт дитинства?",
    answers: [
      { text: "Шоколадний торт", tag: "choco", img: "images/dessert_choco.png" },
      { text: "Мармелад", tag: "fruit", img: "images/dessert_marmelad.png" },
      { text: "Халва", tag: "dark", img: "images/dessert_halva.png" },
      { text: "Медовик", tag: "dessert", img: "images/dessert_honey.png" }
    ]
  },
  {
    text: "🍊 Який фрукт твій улюблений?",
    answers: [
      { text: "Ягода", tag: "fruit", img: "images/fruit_berry.png" },
      { text: "Цитрус", tag: "fruit", img: "images/fruit_citrus.png" },
      { text: "Яблуко/груша", tag: "choco", img: "images/fruit_apple.png" },
      { text: "Сухофрукти", tag: "dark", img: "images/fruit_dry.png" }
    ]
  },
  {
    text: "🌸 Які парфуми тобі ближчі?",
    answers: [
      { text: "Квіткові", tag: "fruit", img: "images/perfume_flower.png" },
      { text: "Свіжі цитрусові", tag: "fruit", img: "images/perfume_citrus.png" },
      { text: "Солодкі гурманські", tag: "choco", img: "images/perfume_sweet.png" },
      { text: "Деревні/пряні", tag: "dark", img: "images/perfume_wood.png" }
    ]
  },
  {
    text: "☕ Яка сцена тобі ближча?",
    answers: [
      { text: "Середземна фієста", tag: "fruit", img: "images/scene_fiesta.png" },
      { text: "Прогулянка після дощу", tag: "fruit", img: "images/scene_rain.png" },
      { text: "Затишний плед і книга", tag: "choco", img: "images/scene_book.png" },
      { text: "Ранковий коворкінг", tag: "dark", img: "images/scene_cowork.png" }
    ]
  },
  {
    text: "🍸 Який коктейль твій улюблений?",
    answers: [
      { text: "Апероль Шприц", tag: "fruit", img: "images/cocktail_aperol.png" },
      { text: "Мохіто", tag: "dessert", img: "images/cocktail_mojito.png" },
      { text: "Віскі-кола", tag: "dark", img: "images/cocktail_whiskey.png" },
      { text: "Еспресо мартіні", tag: "choco", img: "images/cocktail_espresso.png" }
    ]
  },
  {
    text: "🌿 Як ти любиш проводити вихідні?",
    answers: [
      { text: "Прогулянка", tag: "fruit", img: "images/weekend_nature.png" },
      { text: "Вечірка з друзями", tag: "dark", img: "images/weekend_party.png" },
      { text: "Затишний день вдома", tag: "choco", img: "images/weekend_home.png" },
      { text: "Подорож у нове місто", tag: "dessert", img: "images/weekend_trip.png" }
    ]
  },
  {
    text: "🫖 Який метод заварювання тобі ближче?",
    answers: [
      { text: "Фільтр (V60, Chemex)", tag: "fruit", img: "images/brew_filter.png" },
      { text: "Еспресо-машина", tag: "choco", img: "images/brew_espresso.png" },
      { text: "Гейзерна (Moka pot)", tag: "dark", img: "images/brew_moka.png" },
      { text: "Френч Прес, Чашка", tag: "dessert", img: "images/brew_turkish.png" }
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
      { name: "Colombia Excelso", link: "https://bfc24.com/uk/store/product/35", img: "images/colombia_excelso.png" }
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

// API ipapi для визначення країни
async function getUserCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_code; // UA, PL, DE, ...
  } catch {
    return "UA"; // дефолт
  }
}

function showQuestion() {
  quizEl.innerHTML = `<h2>${questions[currentQ].text}</h2>`;
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  questions[currentQ].answers.forEach(a => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `<img src="${a.img}" alt="${a.text}"><p>${a.text}</p>`;
    card.onclick = () => {
      scores[a.tag]++;
      currentQ++;
      if (currentQ < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    gallery.appendChild(card);
  });

  quizEl.appendChild(gallery);
}

async function showResult() {
  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const coffeeSet = coffeeProfiles[winner];
  const coffee = coffeeSet.coffees[Math.floor(Math.random() * coffeeSet.coffees.length)];

  // визначаємо країну
  const country = await getUserCountry();
  const adjustLink = (link) => country === "UA" ? link : link.replace("/uk", "");

  // основна кава
  let html = `
    <h2>Ваша кава — ${coffee.name}</h2>
    <img src="${coffee.img}" alt="${coffee.name}">
    <p>${coffeeSet.desc}</p>
    <a href="${adjustLink(coffee.link)}" target="_blank">
      <button>☕ Замовити</button>
    </a>
  `;

  // додаткові 2 варіанти
  let otherCoffees = [];
  Object.keys(coffeeProfiles).forEach(key => {
    if (key !== winner) {
      otherCoffees = otherCoffees.concat(coffeeProfiles[key].coffees);
    }
  });

  // перемішати й взяти 2 випадкових
  const shuffled = otherCoffees.sort(() => 0.5 - Math.random()).slice(0, 2);

  if (shuffled.length > 0) {
    html += `<h3>✨ Вам також може сподобатися:</h3><div class="gallery">`;
    shuffled.forEach(c => {
      html += `
        <div class="gallery-item" style="height: auto;">
          <img src="${c.img}" alt="${c.name}">
          <p>${c.name}</p>
          <a href="${adjustLink(c.link)}" target="_blank">
            <button>☕ Замовити</button>
          </a>
        </div>
      `;
    });
    html += `</div>`;
  }

  resultEl.innerHTML = html;
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

