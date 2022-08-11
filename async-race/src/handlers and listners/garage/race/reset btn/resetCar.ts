import { startStopEngine } from '../../../../api/engine/startStopEngine';
import { AnimationStateItem } from '../../../../helpers/types';
import { toggleDisable } from '../../../../helpers/toggleDisable';
import { animationState } from '../animation/animationState';

export async function resetCar(id:number) {
  const startBtn = document.getElementById(`start_car_btn_${id}`) as HTMLButtonElement;
  const resetBtn = document.getElementById(`reset_car_btn_${id}`) as HTMLButtonElement;
  const car = document.getElementById(`car_${id}`) as HTMLElement;

  await startStopEngine(id, 'stopped');

  const fromState = animationState.find((el) => el.id === id) as AnimationStateItem;
  fromState.animation?.cancel();

  const index = animationState.indexOf(fromState);
  animationState.splice(index, 1);
  car.style.left = `${fromState?.startPosition}px`;

  toggleDisable(startBtn);
  toggleDisable(resetBtn);
}
