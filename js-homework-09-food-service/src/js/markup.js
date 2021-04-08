import menuCards from '../templates/menu-card.hbs';
import menu from '../menu.json';

const makeMenuCardsMarkup = menuCards(menu);

const listRef = document.querySelector('.js-menu');

listRef.insertAdjacentHTML('afterbegin', makeMenuCardsMarkup);
