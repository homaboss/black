// Объявляем переменную, контекст, определяем высоту и ширину
const C = document.getElementById("weblab"),
    ctx = C.getContext("2d"),
    W = (C.width = window.innerWidth),
    H = (C.height = window.innerHeight);
// Создаем массив с символами, которые будут визуализироваться
const mass = "チャンネル に登録して、 電報チャンネル の記事を高く評価する",
    webmatrix = mass.split("");
//Задаем размер шрифта, считаем колонки и создаем пустой массив
let font = 14,
    col = W / font,
    mas = [];
//Заполняем массив
for (let i = 0; i < col; i++) mas[i] = 1;

function draw() {
    //Цвет фона, который делает эффект затухания символов
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, W, H);
    //Цвет шрифта
    ctx.fillStyle = "#0f0";
    //Свойства шрифта
    ctx.font = font + "px arial";
    //Рисуем символы
    for (let i = 0; i < mas.length; i++) {
        //Случайный набор символов
        let text = webmatrix[Math.floor(Math.random() * webmatrix.length)];
        //Отрисовка символов со смещением
        ctx.fillText(text, i * font, mas[i] * font);
        //Разница отрисовки колонок
        if (mas[i] * font > H && Math.random() > 0.975) mas[i] = 0;
        //Увеличиваем значение
        mas[i]++;
    }
}
//Запускаем функцию рисования через каждые 47 миллисекунды
setInterval(draw, 47);
//При изменении размеров окна происходит обновление страницы
window.addEventListener("resize", () => location.reload());
