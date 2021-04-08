import menuCards from '../templates/menu-card.hbs';
import menu from '../menu.json';

const makeMenuCardsMarkup = menuCards(menu);

export default makeMenuCardsMarkup;
