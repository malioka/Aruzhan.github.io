const items = document.querySelectorAll('.item');
        
items.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.value').style.visibility = 'visible';
  });
        
  item.addEventListener('mouseout', () => {
    item.querySelector('.value').style.visibility = 'hidden';
  });
});
function toggleCSS() {
  var link = document.getElementById('themeCSS');
  var currentStyle = localStorage.getItem('currentStyle');
  
  if (currentStyle === 'styles') { // меняем на 'styles'
      link.setAttribute('href', 'stile1.css'); // меняем на 'stile1.css'
      localStorage.setItem('currentStyle', 'stile1'); // меняем на 'stile1'
  } else {
      link.setAttribute('href', 'styles.css'); // меняем на 'styles.css'
      localStorage.setItem('currentStyle', 'styles'); // меняем на 'styles'
  }
}

function setInitialStyle() {
  var link = document.getElementById('themeCSS');
  var currentStyle = localStorage.getItem('currentStyle');
  
  if (currentStyle) {
      link.setAttribute('href', currentStyle + '.css');
  }
}

window.onload = setInitialStyle;
//Переводчик
function translateText() {
  // Получаем текст для перевода из элемента с id="sourceText"
  const sourceText = document.getElementById('sourceText').value;
  
  // Получаем исходный язык из элемента с id="sourceLanguage"
  const sourceLanguage = document.getElementById('sourceLanguage').value;
  
  // Получаем целевой язык из элемента с id="targetLanguage"
  const targetLanguage = document.getElementById('targetLanguage').value;

  // Формируем URL для отправки GET запроса к Google Translate API
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(sourceText)}`;

  // Отправляем GET запрос к Google Translate API
  fetch(url)
    .then(response => response.json()) // Преобразуем ответ в формат JSON
    .then(data => {
      // Проверяем, получены ли данные и есть ли в них перевод
      if (data && data[0] && data[0][0] && data[0][0][0]) {
        // Если перевод получен успешно, устанавливаем его в элемент с id="translatedText"
        document.getElementById('translatedText').value = data[0][0][0];
      } else {
        // Если произошла ошибка при получении перевода, выводим сообщение об ошибке
        document.getElementById('translatedText').value = 'Ошибка при получении перевода';
      }
    })
    .catch(error => {
      // Если произошла ошибка при выполнении запроса, выводим сообщение об ошибке
      console.error('Произошла ошибка:', error);
      document.getElementById('translatedText').value = 'Произошла ошибка при выполнении запроса';
    });
}
