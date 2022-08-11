import { toggleDisable } from '../../../../helpers/toggleDisable';
import { AnimationStateItem } from '../../../../helpers/types';
import { raceFinishListner } from '../raceFinishListner';
import { animationState } from './animationState';

export function updateAnimation(id:number) {
  const animatedCar = animationState.find((a) => a.id === id) as AnimationStateItem;
  const startBtn = document.getElementById(`start_car_btn_${id}`) as HTMLButtonElement;
  const resetBtn = document.getElementById(`reset_car_btn_${id}`) as HTMLButtonElement;

  toggleDisable(startBtn);
  toggleDisable(resetBtn);

  const car = document.getElementById(`car_${id}`) as HTMLElement;
  const distance = animatedCar.finish - animatedCar.start + 93;
  const step = distance / animatedCar.time;
  const passed = Math.round((step * (animatedCar.animation?.currentTime as number)) / 1000);

  if (animatedCar.status === null) {
    animatedCar.stopPosition = animatedCar.finish;
    car.style.left = `${animatedCar.stopPosition}px`;
  }
  if (animatedCar.status === false) {
    if (animatedCar.stopPosition === 0) {
      const stopPoint = Math.round((step * (animatedCar.stoptime as number)) / 1000);
      car.style.left = `${stopPoint}px`;
      animatedCar.stopPosition = stopPoint;
      animatedCar.animation?.cancel();
    } else {
      car.style.left = `${animatedCar.stopPosition}px`;
    }
  }
  if (animatedCar.status === true) {
    const timeLeft = animatedCar.time * 1000 - (animatedCar.animation?.currentTime as number);
    car.style.left = `${passed}px`;
    animatedCar.animation?.cancel();
    const newAnimation = car.animate([
      { left: `${passed}px` },
      { left: `${animatedCar?.finish}px` },
    ], {
      duration: timeLeft,
    });
    car.style.left = `${animatedCar?.finish}px`;
    animatedCar.animation = newAnimation;
    animatedCar.start = passed;
    animatedCar.time = timeLeft / 1000;
    raceFinishListner(newAnimation, id, animatedCar.resultTime);
  }
}
