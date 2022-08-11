import { toggleDisable } from '../../../../helpers/toggleDisable';
import { startCar } from './startCar';

export async function startCarBtnHandler(event: Event) {
  const car = document.querySelector('.car') as HTMLElement;
  const flag = document.querySelector('.flag') as HTMLElement;
  const start = car.offsetLeft;
  const finish = flag.offsetLeft + 45;
  const btn = event.target as HTMLButtonElement;
  const resetAllBtn = document.getElementById('reset_race_btn') as HTMLButtonElement;
  const id = +btn.id.split('start_car_btn_')[1];

  startCar(id, start, finish, event);

  if (!resetAllBtn.hasAttribute('disabled')) {
    toggleDisable(resetAllBtn);
  }
}
