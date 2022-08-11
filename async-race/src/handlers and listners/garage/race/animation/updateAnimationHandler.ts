import { toggleDisable } from '../../../../helpers/toggleDisable';
import { store } from '../../../../store/store';
import { animationState } from './animationState';
import { updateAnimation } from './updateAnimation';

export function updateAnimationHandler() {
  if (animationState.length === 0) {
    return;
  }

  const startAllBtn = document.getElementById('start_race_btn') as HTMLButtonElement;
  const resetAllBtn = document.getElementById('reset_race_btn') as HTMLButtonElement;

  toggleDisable(startAllBtn);
  toggleDisable(resetAllBtn);

  const cars = [...store.cars];
  cars.forEach((car) => updateAnimation(car.id));
}
