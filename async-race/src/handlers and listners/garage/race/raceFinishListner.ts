import { raceFinishHandler } from './raceFinishHandler';

export function raceFinishListner(animation: Animation, id: number, time: number) {
  animation.addEventListener('finish', () => (raceFinishHandler(id, time)));
}
