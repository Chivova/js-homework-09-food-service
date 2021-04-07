import './styles.css';
import './js/theme-switch.js';
import theme from './js/theme.js';

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.checkbox.addEventListener('change', onChangeThemeClick);

function onChangeThemeClick(evt) {
  const isCheckboxChecked = evt.target.checked;

  if (isCheckboxChecked) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
    localStorage.setItem('theme-name', theme.DARK);
  } else {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('theme-name', theme.LIGHT);
  }
}

currentTheme();

function currentTheme() {
  const isCurrentTheme = localStorage.getItem('theme-name') === theme.DARK;

  if (isCurrentTheme) {
    refs.body.classList.add('dark-theme');
    refs.checkbox.checked = true;
  }
}
