import { store } from '../../../store/store';
import { drawWinnerRow } from '../../../components/winners/drawWinnerRow';
import { toggleDisablePagination } from '../../../helpers/toggleDisable';
import { updateWinnersStore } from '../../../store/updateStore';

export async function winnersPaginationBtnHandler(event: Event) {
  const prevBtn = document.getElementById('winners_prev_btn') as HTMLButtonElement;
  const nextBtn = document.getElementById('winners_next_btn') as HTMLButtonElement;
  const table = document.getElementById('winners_table') as HTMLElement;
  if (event.target === nextBtn) {
    store.currentWinnersPage += 1;
  }
  if (event.target === prevBtn) {
    store.currentWinnersPage -= 1;
  }
  await updateWinnersStore();
  while (table.firstChild !== table.lastChild) {
    table.removeChild(table.lastChild as ChildNode);
  }
  store.winners.forEach((winner, index) => {
    table.append(drawWinnerRow(winner, index));
  });
  toggleDisablePagination(+store.winnersAmount, 10, store.currentWinnersPage, prevBtn, nextBtn);
}
