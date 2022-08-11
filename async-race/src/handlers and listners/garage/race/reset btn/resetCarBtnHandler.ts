import { toggleDisable } from '../../../../helpers/toggleDisable';
import { resetCar } from './resetCar';

export async function resetCarBtnHandler(event: Event) {
  const resetAllBtn = document.getElementById('reset_race_btn') as HTMLButtonElement;
  const btn = event.target as HTMLButtonElement;
  const id = +btn.id.split('reset_car_btn_')[1];

  resetCar(id);
  toggleDisable(resetAllBtn);
}
