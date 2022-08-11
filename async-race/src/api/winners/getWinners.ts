import { Order, Sort, Winner } from '../../helpers/types';
import { winners } from '../requestParams';
import { getCarById } from '../cars/getCar';
import { getSortOrder } from './getSortOrder';

export async function getWinners(page: number, sort: Sort, order: Order, limit = 10) {
  const responce = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items: Array<Winner> = await responce.json();

  return {
    items: await Promise.all(items.map(async (winner) => (
      { ...winner, ...(await getCarById(winner.id)) }
    ))),
    amount: responce.headers.get('X-Total-Count') as string,
  };
}
