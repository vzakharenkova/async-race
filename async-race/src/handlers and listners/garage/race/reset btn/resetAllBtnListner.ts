import { resettAllBtnHandler } from './resetAllBtnHandler';

export function resetAllBtnListner() {
  const resetAllBtn = document.getElementById('reset_race_btn') as HTMLElement;

  resetAllBtn.addEventListener('click', resettAllBtnHandler);
}
