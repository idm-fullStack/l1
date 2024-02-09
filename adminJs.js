window.addEventListener('DOMContentLoaded', () => {
    const activityDiv = document.getElementById('activity');

    // Пример данных активности пользователей
    const activityData = [
        { username: 'User1', location: 'Главная страница' },
        { username: 'User2', location: 'руководство пользователя'},
        { username: 'User3', location: 'руководство пользователя' },
        { username: 'User4', location: 'Главная страница' },
        { username: 'User5', location: 'Главная страница' }
    ];

    // Генерация HTML-кода для отображения активности пользователей
    const generateActivityHTML = () => {
        let html = '';
        for (let i = 0; i < activityData.length; i++) {
            const user = activityData[i];
            html += `<div><strong>${user.username}:</strong> ${user.location}</div>`;
        }
        return html;
    };

    // Обновление отображения активности пользователей
    const updateActivity = () => {
        activityDiv.innerHTML = generateActivityHTML();
    };

    // Вызов функции обновления активности
    updateActivity();
});

document.querySelector('.register-btn').addEventListener('click', function() {
    window.location.href = 'in.html';
});

document.querySelector('.in-btn').addEventListener('click', function() {
    window.location.href = 'auth.html';
});
