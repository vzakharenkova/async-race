import { Car } from '../../../helpers/types';
import { toggleDisable } from '../../../helpers/toggleDisable';
import { drawElement } from '../../common view/drawElement';
import { drawCarImage } from './drawCarImage';

export function drawTrack(car: Car) {
  const tracks = document.getElementById('all_tracks_wrapper') as HTMLElement;
  const trackWrapper = drawElement('div', `track_wrapper_${car.id}`, 'track_wrapper', '');
  const carManager = drawElement('div', `car_manager_${car.id}`, 'car_manager', '');
  const selectCarBtn = drawElement('button', `select_car_btn_${car.id}`, 'select_car_btn btn', 'select', '#708090');
  const removeCarBtn = drawElement('button', `remove_car_btn_${car.id}`, 'remove_car_btn btn', 'remove', '#708090');
  const trackRow = drawElement('div', `track_row_${car.id}`, 'track_row', '');
  const trackContrallers = drawElement('div', `track_contrallers_${car.id}`, 'track_contrallers', '');
  const startCarBtn = drawElement('button', `start_car_btn_${car.id}`, 'start_car_btn btn', 'A', '#708090');
  const resetCarBtn = drawElement('button', `reset_car_btn_${car.id}`, 'reset_car_btn btn', 'B', '#708090') as HTMLButtonElement;
  const carName = drawElement('div', `car_name_${car.id}`, 'car_name', `${car.name}`);
  const track = drawElement('div', `track_${car.id}`, 'track', '');
  const currentCar = drawElement('div', `car_${car.id}`, 'car', '');
  currentCar.innerHTML = drawCarImage(`${car.color}`);
  const finishFlag = drawElement('div', `flag_${car.id}`, 'flag', '🚩');

  tracks.append(trackWrapper);
  trackWrapper.append(carManager, trackRow);
  carManager.append(selectCarBtn, removeCarBtn, carName);
  trackRow.append(trackContrallers, track);
  trackContrallers.append(startCarBtn, resetCarBtn);
  track.append(currentCar, finishFlag);
  toggleDisable(resetCarBtn);
}
