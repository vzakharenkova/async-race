import { getCars } from '../api/cars/getCars';
import { getWinners } from '../api/winners/getWinners';
import { store } from './store';

export async function updateGarageStore() {
  const { items, amount } = await getCars(store.currentCarsPage);

  store.cars = items;
  store.carsAmount = amount;
}

export async function updateWinnersStore() {
  const { items: winners, amount: winnersAmount } = await getWinners(
    store.currentWinnersPage,
    store.sort,
    store.order,
  );

  store.winners = winners;
  store.winnersAmount = winnersAmount;
}
