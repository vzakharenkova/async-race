import { startAllBtnHandler } from './startAllBtnHandler';

export function startAllBtnListner() {
  const startAllBtn = document.getElementById('start_race_btn') as HTMLElement;

  startAllBtn.addEventListener('click', startAllBtnHandler);
}
