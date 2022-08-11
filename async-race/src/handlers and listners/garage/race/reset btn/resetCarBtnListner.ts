import { resetCarBtnHandler } from './resetCarBtnHandler';

export function resetCarBtnListner() {
  const resetBtns = document.querySelectorAll('.reset_car_btn');

  resetBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => (resetCarBtnHandler(e)));
  });
}
