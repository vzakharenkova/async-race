import { store } from '../../store/store';
import { toggleDisable } from '../../helpers/toggleDisable';
import { View } from '../../helpers/types';
import { drawElement } from './drawElement';

export function drawPaginationView(view: View, limit: 7 | 10) {
  const currView = document.getElementById(`${view}`) as HTMLElement;
  const paginationField = drawElement('div', `${view}_pagination`, `${view}_pagination pagination`, '');
  const prevBtn = drawElement('button', `${view}_prev_btn`, `${view}_prev_btn btn`, '◀', '#D2B48C') as HTMLButtonElement;
  const nextBtn = drawElement('button', `${view}_next_btn`, `${view}_next_btn btn`, '▶', '#D2B48C') as HTMLButtonElement;
  currView.append(paginationField);
  paginationField.append(prevBtn, nextBtn);
  prevBtn.setAttribute('disabled', 'disabled');
  nextBtn.setAttribute('disabled', 'disabled');
  let page: number;
  let amount: number;

  if (view === 'garage') {
    page = store.currentCarsPage;
    amount = +store.carsAmount;
  } else {
    page = store.currentWinnersPage;
    amount = +store.winnersAmount;
  }
  if (page !== Math.ceil(amount / limit) && amount > limit) {
    toggleDisable(nextBtn);
  }
  if (page !== 1 && amount > limit) {
    toggleDisable(prevBtn);
  }
}
