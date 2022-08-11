import { store } from '../../store/store';
import { Limit, WinnerToDisplay } from '../../helpers/types';
import { drawCarImage } from '../garage/track/drawCarImage';
import { drawElement } from '../common view/drawElement';

export function drawWinnerRow(winner: WinnerToDisplay, index: number) {
  let numberController = 0;
  const limit: Limit = 10;

  if (store.currentWinnersPage > 1) {
    numberController = limit * (store.currentWinnersPage - 1);
  }

  const n = index + 1 + numberController;
  const row = drawElement('tr', `row_${n}`, 'row', '');
  const number = drawElement('td', `numder_${n}`, 'cell', `${n}`);
  const carImg = drawElement('td', `car_img_${n}`, 'cell', '');
  carImg.innerHTML = drawCarImage(winner.car.color);
  const carName = drawElement('td', `car_name_${n}`, 'cell', `${winner.car.name}`);
  const carWins = drawElement('td', `car_wins_${n}`, 'cell', `${winner.wins}`);
  const carTime = drawElement('td', `car_time_${n}`, 'cell', `${winner.time}`);
  row.append(number, carImg, carName, carWins, carTime);

  return row;
}
