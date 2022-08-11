import { removeBtnHandler } from './removeBtnHandler';

export function removeBtnListner() {
  const removeBtns = document.querySelectorAll('.remove_car_btn');

  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeBtnHandler);
  });
}
