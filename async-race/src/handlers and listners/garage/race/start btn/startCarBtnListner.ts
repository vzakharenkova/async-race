import { startCarBtnHandler } from './startCarBtnHandler';

export function startCarBtnListner() {
  const startBtns = document.querySelectorAll('.start_car_btn');

  startBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => (startCarBtnHandler(e)));
  });
}
