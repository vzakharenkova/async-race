import { store } from '../../../../store/store';
import { toggleDisable } from '../../../../helpers/toggleDisable';
import { raceResultStore } from '../raceResultStore';
import { startCar } from './startCar';

export function startAllBtnHandler(event:Event) {
  raceResultStore.pop();

  const startAllBtn = document.getElementById('start_race_btn') as HTMLButtonElement;
  const resetAllBtn = document.getElementById('reset_race_btn') as HTMLButtonElement;
  const car = document.querySelector('.car') as HTMLElement;
  const flag = document.querySelector('.flag') as HTMLElement;
  const start = car.offsetLeft;
  const finish = flag.offsetLeft + 45;

  toggleDisable(startAllBtn);
  toggleDisable(resetAllBtn);

  const cars = [...store.cars];
  cars.forEach(async (c) => Promise.resolve(await startCar(c.id, start, finish, event)));
}
