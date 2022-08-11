import { store } from '../../../../store/store';
import { toggleDisable } from '../../../../helpers/toggleDisable';
import { resetCar } from './resetCar';

export async function resettAllBtnHandler() {
  const startAllBtn = document.getElementById('start_race_btn') as HTMLButtonElement;
  const resetAllBtn = document.getElementById('reset_race_btn') as HTMLButtonElement;
  const raceResult = document.getElementById('race_result') as HTMLElement;

  toggleDisable(startAllBtn);
  toggleDisable(resetAllBtn);

  const cars = [...store.cars];
  cars.forEach(async (car) => {
    await resetCar(car.id);
  });
  raceResult.textContent = '';
}
