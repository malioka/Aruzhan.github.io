// Функция для открытия модального окна и загрузки PDF
function openModal(pdfUrl) {
    var modal = document.getElementById('pdfModal');
    modal.style.display = 'block';
  
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = pdfUrl;
  }
  
  // Функция для закрытия модального окна и остановки загрузки PDF
  function closeModal() {
    var modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
  
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = '';
  }
  
// Инициализируем переменную isDarkMode из localStorage или устанавливаем по умолчанию false
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Функция для установки соответствующего стиля при загрузке страницы
function setInitialTheme() {
  const themeStyle = document.getElementById('theme-style');
  if (isDarkMode) {
    themeStyle.setAttribute('href', '../theme.css');
  } else {
    themeStyle.setAttribute('href', '../styles.css');
  }
}

// Вызываем функцию при загрузке страницы
setInitialTheme();

// Функция для переключения темы
function toggleTheme() {
  const themeStyle = document.getElementById('theme-style');
  
  if (isDarkMode) {
    themeStyle.setAttribute('href', '../styles.css');
  } else {
    themeStyle.setAttribute('href', '../theme.css');
  }
  
  isDarkMode = !isDarkMode;
  
  // Сохраняем текущее состояние темы в localStorage
  localStorage.setItem('isDarkMode', isDarkMode);
}

// Добавляем обработчик события для кнопки переключения темы
document.getElementById('theme-switch-btn').addEventListener('click', toggleTheme);



// Функция для открытия модального окна и загрузки PDF
function openModal(pdfUrl) {
    var modal = document.getElementById('pdfModal');
    modal.style.display = 'block';
  
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = pdfUrl;
  }
  
  // Функция для закрытия модального окна и остановки загрузки PDF
  function closeModal() {
    var modal = document.getElementById('pdfModal');
    modal.style.display = 'none';
  
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = '';
  }

  function toggleDropdown(element) {
    var dropdownContent = element.querySelector('.dropdown-content');
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
  
  // Закрыть выпадающий список, если клик был за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
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


