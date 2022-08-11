import { getCars } from '../api/cars/getCars';
import { getWinners } from '../api/winners/getWinners';
import { Store } from '../helpers/types';

const { items: cars, amount: carsAmount } = await getCars(1);
const { items: winners, amount: winnersAmount } = await getWinners(1, null, null);

export const store: Store = {
  cars,
  carsAmount,
  currentCarsPage: 1,
  winners,
  winnersAmount,
  currentWinnersPage: 1,
  sort: null,
  order: null,
  view: 'garage',
};
