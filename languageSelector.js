function changeLanguage(language) {
    var lessonsMenu = document.getElementById("lessons-menu");
    var lessonsContent = document.getElementById("lessons-content");
  
    // Очищаем содержимое блоков с меню и контентом уроков
    lessonsMenu.innerHTML = "";
    lessonsContent.innerHTML = "";
  
    // Здесь можно добавить логику для загрузки данных на основе выбранного языка
    // Например, можно использовать AJAX-запросы для загрузки данных из файлов или базы данных
  
    // Пример добавления данных для каждого языка
    switch(language) {
      case "english":
        lessonsMenu.innerHTML = `
        <li><a href="#" onclick="showLessons('level1')" class="lesson-button">А1. Beginner</a></li>
        <li><a href="#" onclick="showLessons('level2')" class="lesson-button">А2. Elementary</a></li>
        <li><a href="#" onclick="showLessons('level3')" class="lesson-button">В1. Pre-Intermediate/Intermediate</a></li>
        <li><a href="#" onclick="showLessons('level4')" class="lesson-button">В2. Upper Intermediate</a></li>
        <li><a href="#" onclick="showLessons('level5')" class="lesson-button">С1. Advanced</a></li>
        <li><a href="#" onclick="showLessons('level6')" class="lesson-button">С2. Proficiency</a></li>
      `;      
        showLessons('level1'); // Показываем уроки первого уровня по умолчанию
        break;
      case "kazakh":
        lessonsMenu.innerHTML = `
          <li><a href="#" onclick="showLessons('Түр 1')" class="lesson-button">А1. Қарапайым деңгей</a></li>
          <li><a href="#" onclick="showLessons('Түр 2')" class="lesson-button">А2. Базалық деңгей</a></li>
          <li><a href="#" onclick="showLessons('Түр 3')" class="lesson-button">В1. Орта деңгей</a></li>
          <li><a href="#" onclick="showLessons('Түр 4')" class="lesson-button">В2. Ортадан жоғары деңгей</a></li>
          <li><a href="#" onclick="showLessons('Түр 5')" class="lesson-button">С1. Жоғары деңгей</a></li>
          <li><a href="#" onclick="showLessons('Түр 6')" class="lesson-button">С2. Мінсіз деңгей</a></li>
        `;
        showLessons('Түр 1'); // Показываем уроки первого уровня по умолчанию
        break;
      case "russian":
        lessonsMenu.innerHTML = `
          <li><a href="#" onclick="showLessons('Уровень 1')"  class="lesson-button">А1. Начальный уровень</a></li>
          <li><a href="#" onclick="showLessons('Уровень 2')"  class="lesson-button">А2. Элементарый уровень</a></li>
          <li><a href="#" onclick="showLessons('Уровень 3')"  class="lesson-button">В1. Слабый средний уровень</a></li>
          <li><a href="#" onclick="showLessons('Уровень 4')"  class="lesson-button">В2. Выше среднего</a></li>
          <li><a href="#" onclick="showLessons('Уровень 5')"  class="lesson-button">С1. Продвинутый уровень</a></li>
          <li><a href="#" onclick="showLessons('Уровень 6')"  class="lesson-button">С2. Совершенный уровень</a></li>
        `;
        showLessons('Уровень 1'); // Показываем уроки первого уровня по умолчанию
        break;
      default:
        // Если выбран неизвестный язык
        lessonsMenu.innerHTML = "<li>No levels available for this language</li>";
        break;
    }
  }
  
  function showLessons(level) {
    var lessonsContent = document.getElementById("lessons-content");
    // Здесь можно добавить логику для загрузки уроков на основе выбранного уровня
    // Например, можно использовать AJAX-запросы для загрузки данных из файлов или базы данных
    switch(level) {
      case "level1":
        lessonsContent.innerHTML = "<div class='lesson-block'>Lesson 1</div><div class='lesson-block'>Lesson 2</div><div class='lesson-block'>Lesson 3</div>";
        break;
      case "level2":
        lessonsContent.innerHTML = "<div class='lesson-block'>Lesson 4</div><div class='lesson-block'>Lesson 5</div><div class='lesson-block'>Lesson 6</div>";
        break;
      case "level3":
        lessonsContent.innerHTML = "<div class='lesson-block'>Lesson 7</div><div class='lesson-block'>Lesson 8</div><div class='lesson-block'>Lesson 9</div>";
        break;
      case "level4":
        lessonsContent.innerHTML = "<div class='lesson-block'>Lesson 10</div><div class='lesson-block'>Lesson 11</div><div class='lesson-block'>Lesson 12</div>";
        break;
      case "level5":
        lessonsContent.innerHTML = "<div class='lesson-block'>Lesson 13</div><div class='lesson-block'>Lesson 14</div><div class='lesson-block'>Lesson 15</div>";
        break;
      case "level6":
        lessonsContent.innerHTML = "<div class='lesson-block'>Lesson 16</div><div class='lesson-block'>Lesson 17</div><div class='lesson-block'>Lesson 18</div>";
        break;
      case "Түр 1":
        lessonsContent.innerHTML = "<div class='lesson-block'>1 сабақ</div><div class='lesson-block'>2 сабақ</div><div class='lesson-block'>3 сабақ</div>";
        break;
      case "Түр 2":
        lessonsContent.innerHTML = "<div class='lesson-block'>4 сабақ</div><div class='lesson-block'>5 сабақ</div><div class='lesson-block'>6 сабақ</div>";
        break;
      case "Түр 3":
        lessonsContent.innerHTML = "<div class='lesson-block'>7 сабақ</div><div class='lesson-block'>8 сабақ</div><div class='lesson-block'>9 сабақ</div>";
        break;
      case "Түр 4":
        lessonsContent.innerHTML = "<div class='lesson-block'>10 сабақ</div><div class='lesson-block'>11 сабақ</div><div class='lesson-block'>12 сабақ</div>";
        break;
      case "Түр 5":
        lessonsContent.innerHTML = "<div class='lesson-block'>13 сабақ</div><div class='lesson-block'>14 сабақ</div><div class='lesson-block'>15 сабақ</div>";
        break;
      case "Түр 6":
        lessonsContent.innerHTML = "<div class='lesson-block'>16 сабақ</div><div class='lesson-block'>17 сабақ</div><div class='lesson-block'>18 сабақ</div>";
        break;
      case "Уровень 1":
        lessonsContent.innerHTML = "<div class='lesson-block'>Урок 1</div><div class='lesson-block'>Урок 2</div><div class='lesson-block'>Урок 3</div>";
        break;
      case "Уровень 2":
        lessonsContent.innerHTML = "<div class='lesson-block'>Урок 4</div><div class='lesson-block'>Урок 5</div><div class='lesson-block'>Урок 6</div>";
        break;
      case "Уровень 3":
        lessonsContent.innerHTML = "<div class='lesson-block'>Урок 7</div><div class='lesson-block'>Урок 8</div><div class='lesson-block'>Урок 9</div>";
        break;
      case "Уровень 4":
        lessonsContent.innerHTML = "<div class='lesson-block'>Урок 10</div><div class='lesson-block'>Урок 11</div><div class='lesson-block'>Урок 12</div>";
        break;
      case "Уровень 5":
        lessonsContent.innerHTML = "<div class='lesson-block'>Урок 13</div><div class='lesson-block'>Урок 14</div><div class='lesson-block'>Урок 15</div>";
        break;
      case "Уровень 6":
        lessonsContent.innerHTML = "<div class='lesson-block'>Урок 16</div><div class='lesson-block'>Урок 17</div><div class='lesson-block'>Урок 18</div>";
        break;
      default:
        lessonsContent.innerHTML = "<p>No lessons available for this level</p>";
        break;
    }
  }
  // Вызываем функцию с начальным значением языка (например, английский)
  changeLanguage("english");
  function showLessons(level) {
    var lessonsContent = document.getElementById("lessons-content");
    
    switch(level) {
      case "level1":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='lessons/english_lesson1.html'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 1'>
              <p>Lesson 1 Description</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='lessons/english_lesson2.html'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 2'>
              <p>Lesson 2 Description</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 3'>
              <p>Lesson 3 Description</p>
            </a>
          </div>
        `;
        break;
      case "level2":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 4'>
              <p>Lesson 4 Description</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 5'>
              <p>Lesson 5 Description</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 6'>
              <p>Lesson 6 Description</p>
            </a>
          </div>
        `;
        break;
      case "level3":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 7'>
              <p>Lesson 7 Description</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 8'>
              <p>Lesson 8 Description</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 9'>
              <p>Lesson 9 Description</p>
            </a>
          </div>
        `;
        break;
        case "level4":
          lessonsContent.innerHTML = `
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 1'>
                <p>Lesson 10 Description</p>
              </a>
            </div>
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 2'>
                <p>Lesson 11 Description</p>
              </a>
            </div>
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 3'>
                <p>Lesson 12 Description</p>
              </a>
            </div>
          `;
          break;
        case "level5":
          lessonsContent.innerHTML = `
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 4'>
                <p>Lesson 13 Description</p>
              </a>
            </div>
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 5'>
                <p>Lesson 14 Description</p>
              </a>
            </div>
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 6'>
                <p>Lesson 15 Description</p>
              </a>
            </div>
          `;
          break;
        case "level6":
          lessonsContent.innerHTML = `
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 7'>
                <p>Lesson 16 Description</p>
              </a>
            </div>
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 8'>
                <p>Lesson 17 Description</p>
              </a>
            </div>
            <div class='lesson-block'>
              <a href='#'>
                <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Lesson 9'>
                <p>Lesson 18 Description</p>
              </a>
            </div>
          `;
          break;
      // Добавьте уроки для казахского языка
      case "Түр 1":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='lessons/kazakh_lesson1.html'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='1 сабақ'>
              <p>1 сабақ сипаттамасы</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='lessons/kazakh_lesson2.html'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='2 сабақ'>
              <p>2 сабақ сипаттамасы</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='3 сабақ'>
              <p>3 сабақ сипаттамасы</p>
            </a>
          </div>
        `;
        break;
        case "Түр 2":
  lessonsContent.innerHTML = `
    <div class='lesson-block'>
      <a href='#'>
        <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='4 сабақ'>
        <p>4 сабақ сипаттамасы</p>
      </a>
    </div>
    <div class='lesson-block'>
      <a href='#'>
        <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='5 сабақ'>
        <p>5 сабақ сипаттамасы</p>
      </a>
    </div>
    <div class='lesson-block'>
      <a href='#'>
        <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='6 сабақ'>
        <p>6 сабақ сипаттамасы</p>
      </a>
    </div>
  `;
  break;
  case "Түр 3":
    lessonsContent.innerHTML = `
      <div class='lesson-block'>
        <a href='#'>
          <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='7 сабақ'>
          <p>7 сабақ сипаттамасы</p>
        </a>
      </div>
      <div class='lesson-block'>
        <a href='#'>
          <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='8 сабақ'>
          <p>8 сабақ сипаттамасы</p>
        </a>
      </div>
      <div class='lesson-block'>
        <a href='#'>
          <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='9 сабақ'>
          <p>9 сабақ сипаттамасы</p>
        </a>
      </div>
    `;
    break;
    case "Түр 4":
      lessonsContent.innerHTML = `
        <div class='lesson-block'>
          <a href='#'>
            <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='1 сабақ'>
            <p>10 сабақ сипаттамасы</p>
          </a>
        </div>
        <div class='lesson-block'>
          <a href='#'>
            <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='2 сабақ'>
            <p>11 сабақ сипаттамасы</p>
          </a>
        </div>
        <div class='lesson-block'>
          <a href='#'>
            <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='3 сабақ'>
            <p>12 сабақ сипаттамасы</p>
          </a>
        </div>
      `;
      break;
      case "Түр 5":
lessonsContent.innerHTML = `
  <div class='lesson-block'>
    <a href='#'>
      <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='4 сабақ'>
      <p>13 сабақ сипаттамасы</p>
    </a>
  </div>
  <div class='lesson-block'>
    <a href='#'>
      <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='5 сабақ'>
      <p>14 сабақ сипаттамасы</p>
    </a>
  </div>
  <div class='lesson-block'>
    <a href='#'>
      <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='6 сабақ'>
      <p>15 сабақ сипаттамасы</p>
    </a>
  </div>
`;
break;
case "Түр 6":
  lessonsContent.innerHTML = `
    <div class='lesson-block'>
      <a href='#'>
        <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='7 сабақ'>
        <p>16 сабақ сипаттамасы</p>
      </a>
    </div>
    <div class='lesson-block'>
      <a href='#'>
        <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='8 сабақ'>
        <p>17 сабақ сипаттамасы</p>
      </a>
    </div>
    <div class='lesson-block'>
      <a href='#'>
        <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='9 сабақ'>
        <p>18 сабақ сипаттамасы</p>
      </a>
    </div>
  `;
  break;
      // Добавьте уроки для русского языка
      case "Уровень 1":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='lessons/russian_lesson1.html'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 1'>
              <p>Описание урока 1</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='lessons/russian_lesson2.html'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 2'>
              <p>Описание урока 2</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 3'>
              <p>Описание урока 3</p>
            </a>
          </div>
        `;
        break;
      // Добавьте уроки для русского языка
      case "Уровень 2":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 4'>
              <p>Описание урока 4</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 5'>
              <p>Описание урока 5</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 6'>
              <p>Описание урока 6</p>
            </a>
          </div>
        `;
        break;
      // Добавьте уроки для русского языка
      case "Уровень 3":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 7'>
              <p>Описание урока 7</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 8'>
              <p>Описание урока 8</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 9'>
              <p>Описание урока 9</p>
            </a>
          </div>
        `;
        break;
            case "Уровень 4":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 1'>
              <p>Описание урока 10</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 2'>
              <p>Описание урока 11</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 3'>
              <p>Описание урока 12</p>
            </a>
          </div>
        `;
        break;
      // Добавьте уроки для русского языка
      case "Уровень 5":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 4'>
              <p>Описание урока 13</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 5'>
              <p>Описание урока 14</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 6'>
              <p>Описание урока 15</p>
            </a>
          </div>
        `;
        break;
      // Добавьте уроки для русского языка
      case "Уровень 6":
        lessonsContent.innerHTML = `
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 7'>
              <p>Описание урока 16</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 8'>
              <p>Описание урока 17</p>
            </a>
          </div>
          <div class='lesson-block'>
            <a href='#'>
              <img src='C:\\Users\\Mechta2023\\Desktop\\4 семестр\\протоколы и интерфейсы компьютерных систем\\3modul\\img\\book-list\\pp.png' alt='Урок 9'>
              <p>Описание урока 18</p>
            </a>
          </div>
        `;
        break;
      default:
        lessonsContent.innerHTML = "<p>No lessons available for this level</p>";
        break;
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
