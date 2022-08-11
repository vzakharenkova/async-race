import { store } from '../../../store/store';

export function updateSortingArrow() {
  if (store.order === null) {
    return;
  }
  const arrow = document.getElementById(`${store.sort}_arrow`) as HTMLElement;
  arrow.style.opacity = '1';
  if (store.order === 'ASC') {
    arrow.classList.add('down');
  }
}
