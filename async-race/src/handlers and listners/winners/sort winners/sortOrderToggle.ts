import { store } from '../../../store/store';
import { Order, SortingColumn } from '../../../helpers/types';

export function sortToggle(columnToSortName:SortingColumn) {
  store.sort = columnToSortName;
}
export function orderToggle(currOrder: Order) {
  if (currOrder === 'ASC') {
    store.order = 'DESC';
  } else {
    store.order = 'ASC';
  }
}
