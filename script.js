// Тексты для языков
const texts = {
    ru: {
        title: "Портгас Д. Эйс",
        subtitle: "Герой, который останется в наших сердцах",
        whyTitle: "Почему Эйс самый крутой?",
        whyText: "Портгас Д. Эйс — невероятно харизматичный и мощный персонаж. Его огненные способности в постеле которые он использует с помощью фрукта Мера-Мера делает его самым сочным персонажем Ван-Писа.",
        photoTitle: "Эйс во всей красе",
        footerText: "🔥 «Эйс, мы тебя не забудем!» 🔥"
    },
    en: {
        title: "Portgas D. Ace",
        subtitle: "A hero who will remain in our hearts",
        whyTitle: "Why is Ace the coolest?",
        whyText: "Portgas D. Ace is an incredibly charismatic and powerful character. His fiery abilities in bed, which he uses with the help of the Mera-Mera fruit, make him the juiciest character in One Piece.",
        photoTitle: "Ace in All His Glory",
        footerText: "🔥 'Ace, we won't forget you!' 🔥"
    }
};

// Текущий язык
let currentLang = "ru";

// Переключение языка
function toggleLanguage() {
    currentLang = currentLang === "ru" ? "en" : "ru";
    const lang = texts[currentLang];

    // Обновляем тексты на странице
    document.getElementById("title").textContent = lang.title;
    document.getElementById("subtitle").textContent = lang.subtitle;
    document.getElementById("why-title").textContent = lang.whyTitle;
    document.getElementById("why-text").textContent = lang.whyText;
    document.getElementById("photo-title").textContent = lang.photoTitle;
    document.getElementById("footer-text").textContent = lang.footerText;

    // Меняем текст кнопки
    document.querySelector(".lang-switch").textContent = currentLang === "ru" ? "EN" : "RU";
}
