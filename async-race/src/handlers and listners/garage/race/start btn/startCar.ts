import { driveCar } from '../../../../api/engine/driveCar';
import { startStopEngine } from '../../../../api/engine/startStopEngine';
import { toggleDisable } from '../../../../helpers/toggleDisable';
import { AnimationStateItem } from '../../../../helpers/types';
import { raceFinishListner } from '../raceFinishListner';
import { animationState } from '../animation/animationState';

export async function startCar(id: number, start: number, finish: number, event:Event) {
  const startBtn = document.getElementById(`start_car_btn_${id}`) as HTMLButtonElement;
  const resetBtn = document.getElementById(`reset_car_btn_${id}`) as HTMLButtonElement;
  const startAllBtn = document.getElementById('start_race_btn') as HTMLButtonElement;
  const car = document.getElementById(`car_${id}`) as HTMLElement;

  toggleDisable(startBtn);
  toggleDisable(resetBtn);

  const { velocity, distance } = await startStopEngine(id, 'started');
  let time = Math.round(distance / velocity);
  const animation = car.animate([
    { left: `${start}px` },
    { left: `${finish}px` },
  ], {
    duration: time,
  });
  time /= 1000;

  if (event.target === startAllBtn) {
    raceFinishListner(animation, id, time);
  }

  animationState.push({
    id,
    start,
    animation,
    time,
    resultTime: time,
    finish,
    status: true,
    stoptime: 0,
    startPosition: start,
    stopPosition: 0,
  });
  car.style.left = `${finish}px`;

  const { success } = await driveCar(id, 'drive');

  if (!success) {
    const animatedCar = animationState.find((a) => a.id === id) as AnimationStateItem;
    if (car.offsetLeft > 0) {
      car.style.left = `${car.offsetLeft}px`;
      animatedCar.stopPosition = car.offsetLeft;
    }
    animatedCar.status = false;
    animatedCar.stoptime = animatedCar.animation?.currentTime as number;
    animation.cancel();
  }
}
