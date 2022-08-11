import { store } from '../../../store/store';
import { SortingColumn } from '../../../helpers/types';
import { drawWinnerRow } from '../../../components/winners/drawWinnerRow';
import { updateWinnersStore } from '../../../store/updateStore';
import { orderToggle, sortToggle } from './sortOrderToggle';

export async function sortHandler(columnToSortName:SortingColumn, otherColumnName:SortingColumn) {
  const columnToSortArrow = document.getElementById(`${columnToSortName}_arrow`) as HTMLElement;
  const otherColumnArrow = document.getElementById(`${otherColumnName}_arrow`) as HTMLElement;
  const table = document.getElementById('winners_table') as HTMLElement;
  otherColumnArrow.classList.remove('down');
  if (otherColumnArrow.style.opacity === '1' || store.sort === null) {
    store.order = 'DESC';
    sortToggle(columnToSortName);
  }
  if ((otherColumnArrow.style.opacity === '0' && columnToSortArrow.style.opacity !== '0') || columnToSortArrow.style.opacity === '1') {
    columnToSortArrow.classList.toggle('down');
    orderToggle(store.order);
  }
  otherColumnArrow.style.opacity = '0';
  columnToSortArrow.style.opacity = '1';
  await updateWinnersStore();
  while (table.firstChild !== table.lastChild) {
    table.removeChild(table.lastChild as ChildNode);
  }
  store.winners.forEach((winner, index) => {
    table.append(drawWinnerRow(winner, index));
  });
}
