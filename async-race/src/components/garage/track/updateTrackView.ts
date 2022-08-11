import { updateGarageStore } from '../../../store/updateStore';
import { store } from '../../../store/store';
import { addTrackListners } from '../../../handlers and listners/garage/trackListners';
import { drawTrack } from './drawTrack';

export async function updateTrackView() {
  const garageHeader = document.getElementById('garage_heading') as HTMLElement;
  const pageNumber = document.getElementById('garage_page') as HTMLElement;
  const tracks = document.querySelectorAll('.track_wrapper');

  tracks.forEach((track) => track.remove());
  await updateGarageStore();
  store.cars.forEach((car) => {
    drawTrack(car);
  });
  pageNumber.textContent = `Page ${store.currentCarsPage}`;
  garageHeader.textContent = `Garage (${store.carsAmount})`;

  addTrackListners();
}
