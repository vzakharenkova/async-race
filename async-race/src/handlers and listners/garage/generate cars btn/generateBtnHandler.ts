import { createCar } from '../../../api/cars/createCar';
import { CarUpdate, Limit } from '../../../helpers/types';
import { store } from '../../../store/store';
import { updateGarageStore } from '../../../store/updateStore';
import { updateTrackView } from '../../../components/garage/track/updateTrackView';
import { toggleDisable } from '../../../helpers/toggleDisable';
import { getRandomColor, getRandomNumber } from './getRandomProps';

async function generateNewCars() {
  const namesArr1 = ['Audi', 'Bentley', 'BMW', 'Cadilac', 'Chevrolet', 'Sitroen', 'Ferrari', 'Kia', 'Mazda', 'Opel'];
  const namesArr2 = ['Pasat', 'Cosmo', 'Capella', 'Eldorado', 'XT5', 'X5', 'A7', 'Q8', 'California', 'F430'];
  const index1 = getRandomNumber(0, 9);
  const index2 = getRandomNumber(0, 9);
  const randomName = `${namesArr1[index1]} ${namesArr2[index2]}`;
  const randomColor = getRandomColor();
  const props:CarUpdate = {
    name: randomName,
    color: randomColor,
  };
  const newCar = await createCar(props);

  return newCar;
}

export async function generateBtnHandler(n: number) {
  const garageHeading = document.getElementById('garage_heading') as HTMLElement;
  const nextBtn = document.getElementById('garage_next_btn') as HTMLButtonElement;
  const limit: Limit = 7;
  let counter = n;

  while (counter > 0) {
    await generateNewCars();
    counter -= 1;
    store.carsAmount = (+store.carsAmount + 1).toString();
  }
  garageHeading.innerText = `Garage (${store.carsAmount})`;
  updateGarageStore();
  updateTrackView();
  if (store.currentCarsPage < Math.ceil(+store.carsAmount / limit) && nextBtn.hasAttribute('disabled')) {
    toggleDisable(nextBtn);
  }
}
