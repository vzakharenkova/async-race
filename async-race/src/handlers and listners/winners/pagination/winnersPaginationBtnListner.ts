import { winnersPaginationBtnHandler } from './winnersPaginationBtnHandler';

export function winnersPaginationBtnListner() {
  const nextPageBtn = document.getElementById('winners_next_btn') as HTMLButtonElement;
  const prevPageBtn = document.getElementById('winners_prev_btn') as HTMLButtonElement;
  nextPageBtn.addEventListener('click', winnersPaginationBtnHandler);
  prevPageBtn.addEventListener('click', winnersPaginationBtnHandler);
}
