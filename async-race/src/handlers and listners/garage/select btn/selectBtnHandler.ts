import { getCarById } from '../../../api/cars/getCar';
import { inputsState } from '../../../components/garage/garage manager/inputs/inputsState';
import { updateInputsState } from '../../../components/garage/garage manager/inputs/updateInputsState';
import { updateBtnHandler } from '../update btn/updateBtnHandler';

export async function selectBtnHandler(event: Event) {
  const btn = event.target as HTMLButtonElement;
  const updateCarName = document.getElementById('update_car_input') as HTMLInputElement;
  const updateCarColor = document.getElementById('update_car_color') as HTMLInputElement;
  const updateCarBtn = document.getElementById('update_btn') as HTMLButtonElement;
  const selectedCar = await getCarById(+btn.id.split('select_car_btn_')[1]);
  let carId: number;

  if (inputsState.selectedCarId === 0) {
    carId = selectedCar.car.id;
  } else {
    carId = inputsState.selectedCarId;
  }

  updateCarName.value = selectedCar.car.name;
  updateCarColor.value = selectedCar.car.color;
  updateCarBtn.removeAttribute('disabled');
  updateCarBtn.onclick = () => (updateBtnHandler(carId));
  updateInputsState(carId);
}
