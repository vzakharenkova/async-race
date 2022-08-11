import { store } from '../../store/store';
import { drawElement } from '../common view/drawElement';
import { drawWinnerRow } from './drawWinnerRow';

export function darwWinnersTable() {
  const winners = document.getElementById('winners') as HTMLElement;
  const winnersTable = drawElement('table', 'winners_table', 'winners_table', '');
  const tableHeader = drawElement('tr', 'table_header', 'table_header', '');
  const headerCellNumber = drawElement('td', 'cell_numder', 'cell', 'Number', '#FFA07A');
  const headerCellCarImg = drawElement('td', 'cell_car_img', 'cell', 'Car', '#FFA07A');
  const headerCellCarName = drawElement('td', 'cell_car_name', 'cell', 'Name', '#FFA07A');
  const headerCellCarWins = drawElement('td', 'cell_car_wins', 'cell', 'Wins', '#FFA07A');
  const headerCellCarTime = drawElement('td', 'cell_car_time', 'cell', 'Time', '#FFA07A');
  const sortingWinsArrow = drawElement('div', 'wins_arrow', 'wins_arrow arrow', '↑');
  const sortingTimeArrow = drawElement('div', 'time_arrow', 'time_arrow arrow', '↑');

  winners.append(winnersTable);
  winnersTable.append(tableHeader);
  tableHeader.append(
    headerCellNumber,
    headerCellCarImg,
    headerCellCarName,
    headerCellCarWins,
    headerCellCarTime,
  );
  headerCellCarWins.append(sortingWinsArrow);
  headerCellCarTime.append(sortingTimeArrow);
  store.winners.forEach((winner, index) => {
    winnersTable.append(drawWinnerRow(winner, index));
  });
}
