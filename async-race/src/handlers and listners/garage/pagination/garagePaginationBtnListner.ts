import { garagePaginationBtnHandler } from './garagePaginationBtnHandler';

export function garagePaginationBtnListner() {
  const nextGaragePageBtn = document.getElementById('garage_next_btn') as HTMLButtonElement;
  const prevGaragePageBtn = document.getElementById('garage_prev_btn') as HTMLButtonElement;

  nextGaragePageBtn.addEventListener('click', garagePaginationBtnHandler);
  prevGaragePageBtn.addEventListener('click', garagePaginationBtnHandler);
}
