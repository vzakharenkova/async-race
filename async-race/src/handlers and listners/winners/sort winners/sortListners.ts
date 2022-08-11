import { sortHandler } from './sortHandler';

export function sortListner() {
  const winsColumn = document.getElementById('cell_car_wins') as HTMLElement;
  const timeColumn = document.getElementById('cell_car_time') as HTMLElement;
  winsColumn.addEventListener('click', () => sortHandler('wins', 'time'));
  timeColumn.addEventListener('click', () => sortHandler('time', 'wins'));
}
