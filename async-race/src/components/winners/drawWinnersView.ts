import { sortListner } from '../../handlers and listners/winners/sort winners/sortListners';
import { winnersPaginationBtnListner } from '../../handlers and listners/winners/pagination/winnersPaginationBtnListner';
import { updateSortingArrow } from '../../handlers and listners/winners/sort winners/updateSortingArrows';
import { store } from '../../store/store';
import { toggleDisable } from '../../helpers/toggleDisable';
import { drawElement } from '../common view/drawElement';
import { drawPaginationView } from '../common view/drawPaginationView';
import { darwWinnersTable } from './darwWinnersTable';

export function drawWinnersView() {
  const winnersBtn = document.getElementById('winners_btn') as HTMLButtonElement;
  const garageBtn = document.getElementById('garage_btn') as HTMLButtonElement;
  const garage = document.getElementById('garage') as HTMLElement;

  if (garage) {
    garage.remove();
  }

  const appWrapper = document.getElementById('app_wrapper') as HTMLElement;
  const winners = drawElement('div', 'winners', 'winners', '');
  const heading = drawElement('h1', 'winners_heading', 'winners_heading', `Winners (${store.winnersAmount})`);
  const currPage = drawElement('h2', `page_${store.currentWinnersPage}`, 'page', `Page ${store.currentWinnersPage}`);
  appWrapper.append(winners);
  winners.append(heading, currPage);

  darwWinnersTable();
  updateSortingArrow();
  drawPaginationView('winners', 10);
  toggleDisable(winnersBtn);
  toggleDisable(garageBtn);

  winnersPaginationBtnListner();
  sortListner();
}
