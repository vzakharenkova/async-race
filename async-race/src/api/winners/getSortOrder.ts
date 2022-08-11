import { Order, Sort } from '../../helpers/types';

export function getSortOrder(sort: Sort, order: Order) {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }

  return '';
}
