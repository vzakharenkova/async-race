import { selectBtnHandler } from './selectBtnHandler';

export function selectBtnListner() {
  const selectBtns = document.querySelectorAll('.select_car_btn');

  selectBtns.forEach((btn) => {
    btn.addEventListener('click', selectBtnHandler);
  });
}
