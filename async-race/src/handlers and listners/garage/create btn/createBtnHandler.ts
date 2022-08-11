import { createCar } from '../../../api/cars/createCar';
import { CarUpdate } from '../../../helpers/types';
import { drawTrack } from '../../../components/garage/track/drawTrack';
import { store } from '../../../store/store';
import { updateGarageStore } from '../../../store/updateStore';

export async function createBtnHandler() {
  const garageHeading = document.getElementById('garage_heading') as HTMLElement;
  const createCarName = document.getElementById('create_car_input') as HTMLInputElement;
  const createCarColor = document.getElementById('create_car_color') as HTMLInputElement;
  const dispaidCarsAmount = document.getElementsByClassName('track_wrapper').length;
  const newName = createCarName.value;
  const newColor = createCarColor.value;
  const newProps:CarUpdate = {
    name: newName,
    color: newColor,
  };
  createCarName.value = '';
  const newCar = await createCar(newProps);

  if (dispaidCarsAmount < 7) {
    drawTrack(newCar);
  }

  await updateGarageStore();
  garageHeading.textContent = `Garage (${store.carsAmount})`;
}
