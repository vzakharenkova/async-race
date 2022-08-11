import { removeBtnListner } from '../handlers and listners/garage/remove btn/removeBtnListner';
import { store } from '../store/store';
import { toggleDisablePagination } from './toggleDisable';

export function mutationObserve() {
  const target = document.getElementById('all_tracks_wrapper') as HTMLElement;
  const config = {
    childList: true,
    subtree: true,
  };
  const callback: MutationCallback = function (mutationsList) {
    mutationsList.forEach(() => {
      removeBtnListner();
      const prevBtn = document.getElementById('garage_prev_btn') as HTMLButtonElement;
      const nextBtn = document.getElementById('garage_next_btn') as HTMLButtonElement;
      toggleDisablePagination(+store.carsAmount, 7, store.currentCarsPage, prevBtn, nextBtn);
    });
  };
  const observer = new MutationObserver(callback);

  return observer.observe(target, config);
}
