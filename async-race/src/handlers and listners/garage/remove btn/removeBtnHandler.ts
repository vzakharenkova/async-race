import { deleteCar } from '../../../api/cars/deleteCar';
import { deleteWinner } from '../../../api/winners/deleteWinner';
import { getCarById } from '../../../api/cars/getCar';
import { store } from '../../../store/store';
import { updateGarageStore, updateWinnersStore } from '../../../store/updateStore';
import { updateTrackView } from '../../../components/garage/track/updateTrackView';

export async function removeBtnHandler(event: Event) {
  const garageHeading = document.getElementById('garage_heading') as HTMLElement;
  const btn = event.target as HTMLButtonElement;
  const selectedCar = await getCarById(+btn.id.split('remove_car_btn_')[1]);
  const carId = selectedCar.car.id;

  await deleteCar(carId);
  await deleteWinner(carId);

  updateTrackView();
  updateGarageStore();
  garageHeading.innerText = `Garage (${store.carsAmount})`;
  updateWinnersStore();
}
