
var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
});

splide.mount();

let lessons = [
  "Знакомство с html, css, js и разница между ними",
  "Виды сайтов т первые терминалы",
  "CSS - базовые стили и их подключение. Палитра",
  "HTML [Таблицы]",
  "HTML [Формы]",
  "CSS [Intermediate]",
]

lessons[1] = "Первый лендинг"
lessons.push("css Flex")

let ul = document.getElementsByClassName('lessons')[0]

for (let i = 0; i < lessons.length; i++) {
  let(lesson = lessons[i])
  ul.innerHTML = ul.innerHTML + `<li class="lesson">Урок №$(1+1): ${lesson}</li>`
}