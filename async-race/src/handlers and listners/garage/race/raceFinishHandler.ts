import { store } from '../../../store/store';
import { AnimationStateItem, Car, RaceResult } from '../../../helpers/types';
import { updateWinnersStore } from '../../../store/updateStore';
import { raceResultStore } from './raceResultStore';
import { sendRaceResult } from './sendRaceResult';
import { animationState } from './animation/animationState';

export async function raceFinishHandler(id: number, time:number) {
  const animation = animationState.find((el) => el.id === id) as AnimationStateItem;
  animation.status = null;

  if (raceResultStore.length === 1) {
    return;
  }

  const result: RaceResult = {
    id,
    time,
  };
  raceResultStore.push(result);

  const carWinner = store.cars.find((el) => el.id === id) as Car;
  const raceResultField = document.getElementById('race_result') as HTMLElement;
  raceResultField.textContent = `${carWinner.name} is winner (time: ${time} s)`;

  await sendRaceResult(id, time);
  await updateWinnersStore();
}
