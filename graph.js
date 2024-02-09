// Создаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// Устанавливаем метод запроса и URL для загрузки данных
xhr.open('GET', 'данные.txt', true);

// Устанавливаем обработчик события загрузки данных
xhr.onload = function() {
    if (xhr.status === 200) {
        // Получаем данные из ответа
        var data = xhr.responseText;

        // Разбиваем данные на строки
        var lines = data.split('\n');

        // Создаем массивы для хранения значений x и y
        var x = [];
        var y = [];

        // Обрабатываем каждую строку данных
        lines.forEach(function(line) {
            // Разбиваем строку на значения x и y
            var values = line.split('|');
            x.push(parseFloat(values[0]));
            y.push(parseFloat(values[1]));
        });

        // Создаем элементы графика и отображаем его
        createChart(x, y);
    }
};

// Отправляем запрос на загрузку данных
xhr.send();

// Функция для создания и отображения графика
function createChart(x, y) {
    // Создаем элементы графика
    var canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Определяем максимальные значения для осей
    var maxX = Math.max(...x);
    var maxY = Math.max(...y);

    // Рисуем оси
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, canvas.height - 20);
    ctx.lineTo(canvas.width - 20, canvas.height - 20);
    ctx.stroke();

    // Рисуем метки на осях
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText('Время (секунды)', canvas.width / 2, canvas.height - 5);
    ctx.textAlign = 'right';
    ctx.fillText('Уровень шума (дБ)', 45, 20);

    // Рисуем точки на графике
    ctx.beginPath();
    ctx.strokeStyle = '#f00';
    ctx.lineWidth = 2;

    for (var i = 0; i < x.length; i++) {
        var xPos = 50 + (x[i] / maxX) * (canvas.width - 70);
        var yPos = canvas.height - 20 - (y[i] / maxY) * (canvas.height - 40);
        ctx.lineTo(xPos, yPos);
    }

    ctx.stroke();
}
