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