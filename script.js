const items = document.querySelectorAll('.item');
        
items.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.value').style.visibility = 'visible';
  });
        
  item.addEventListener('mouseout', () => {
    item.querySelector('.value').style.visibility = 'hidden';
  });
});
function translateText() {
  const sourceText = document.getElementById('sourceText').value;
  const sourceLanguage = document.getElementById('sourceLanguage').value;
  const targetLanguage = document.getElementById('targetLanguage').value;

  // Формируем URL для запроса к Google Translate
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(sourceText)}`;

  // Отправляем GET запрос к Google Translate
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data[0] && data[0][0] && data[0][0][0]) {
        document.getElementById('translatedText').value = data[0][0][0];
      } else {
        document.getElementById('translatedText').value = 'Ошибка при получении перевода';
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
      document.getElementById('translatedText').value = 'Произошла ошибка при выполнении запроса';
    });
}
// Открыть модальное окно "Вход"
function openLoginModal() {
  document.getElementById('login-modal').style.display = 'block';
}

// Закрыть модальное окно "Вход"
function closeLoginModal() {
  document.getElementById('login-modal').style.display = 'none';
}

// Открыть модальное окно "Регистрация"
function openRegistrationModal() {
  document.getElementById('registration-form').style.display = 'block';
}

// Закрыть модальное окно "Регистрация"
function closeRegistrationModal() {
  document.getElementById('registration-form').style.display = 'none';
}

// Открыть форму регистрации и закрыть модальное окно "Вход"
function showRegistrationForm() {
  closeLoginModal(); // Закрыть модальное окно "Вход"
  openRegistrationModal(); // Открыть модальное окно "Регистрация"
}

// Инициализируем переменную isDarkMode из localStorage или устанавливаем по умолчанию false
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Функция для установки соответствующего стиля при загрузке страницы
function setInitialTheme() {
  const themeStyle = document.getElementById('theme-style');
  if (isDarkMode) {
    themeStyle.setAttribute('href', 'theme.css');
  } else {
    themeStyle.setAttribute('href', 'styles.css');
  }
}

// Вызываем функцию при загрузке страницы
setInitialTheme();

// Функция для переключения темы
function toggleTheme() {
  const themeStyle = document.getElementById('theme-style');
  
  if (isDarkMode) {
    themeStyle.setAttribute('href', 'styles.css');
  } else {
    themeStyle.setAttribute('href', 'theme.css');
  }
  
  isDarkMode = !isDarkMode;
  
  // Сохраняем текущее состояние темы в localStorage
  localStorage.setItem('isDarkMode', isDarkMode);
}

// Добавляем обработчик события для кнопки переключения темы
document.getElementById('theme-switch-btn').addEventListener('click', toggleTheme);



