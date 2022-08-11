import { addGarageListners } from '../../handlers and listners/garage/garageListners';
import { addTrackListners } from '../../handlers and listners/garage/trackListners';
import { store } from '../../store/store';
import { toggleDisable } from '../../helpers/toggleDisable';
import { drawElement } from '../common view/drawElement';
import { drawPaginationView } from '../common view/drawPaginationView';
import drawGarageManagerView from './garage manager/drawGarageManagerView';
import { drawTrack } from './track/drawTrack';

export default function drawGarageView() {
  const garageBtn = document.getElementById('garage_btn') as HTMLButtonElement;
  const winnersBtn = document.getElementById('winners_btn') as HTMLButtonElement;
  const winners = document.getElementById('winners') as HTMLElement;

  if (winners) {
    winners.remove();
  }

  drawGarageManagerView();

  const garage = document.getElementById('garage') as HTMLElement;
  const heading = drawElement('h1', 'garage_heading', 'garage_heading', `Garage (${store.carsAmount})`);
  const currPage = drawElement('h2', 'garage_page', 'page', `Page ${store.currentCarsPage}`);
  const raceField = drawElement('div', 'race_field', 'race_field', '');
  const tracks = drawElement('div', 'all_tracks_wrapper', 'all_tracks_wrapper', '');

  garage.append(heading, currPage, raceField);
  raceField.append(tracks);

  store.cars.forEach((car) => {
    drawTrack(car);
  });
  toggleDisable(winnersBtn);
  toggleDisable(garageBtn);
  drawPaginationView('garage', 7);
  addGarageListners();
  addTrackListners();
}
