import { store } from '../../../store/store';
import { toggleDisablePagination } from '../../../helpers/toggleDisable';
import { updateTrackView } from '../../../components/garage/track/updateTrackView';

export async function garagePaginationBtnHandler(event: Event) {
  const prevBtn = document.getElementById('garage_prev_btn') as HTMLButtonElement;
  const nextBtn = document.getElementById('garage_next_btn') as HTMLButtonElement;

  if (event.target === nextBtn) {
    store.currentCarsPage += 1;
  }
  if (event.target === prevBtn) {
    store.currentCarsPage -= 1;
  }

  updateTrackView();

  const carsAmount = +store.carsAmount;

  toggleDisablePagination(carsAmount, 7, store.currentCarsPage, prevBtn, nextBtn);
}
