import { updateCar } from '../../../api/cars/updateCar';
import { CarUpdate } from '../../../helpers/types';
import { drawCarImage } from '../../../components/garage/track/drawCarImage';
import { inputsState } from '../../../components/garage/garage manager/inputs/inputsState';
import { updateInputsState } from '../../../components/garage/garage manager/inputs/updateInputsState';
import { updateWinnersStore } from '../../../store/updateStore';

export function updateBtnHandler(id: number) {
  const updateCarBtn = document.getElementById('update_btn') as HTMLButtonElement;
  const updateCarName = document.getElementById('update_car_input') as HTMLInputElement;
  const updateCarColor = document.getElementById('update_car_color') as HTMLInputElement;
  const carImg = document.getElementById(`car_${id}`) as HTMLElement;
  const carName = document.getElementById(`car_name_${id}`) as HTMLElement;
  const newName = updateCarName.value;
  const newColor = updateCarColor.value;
  const newProps:CarUpdate = {
    name: newName,
    color: newColor,
  };

  updateCar(id, newProps);
  carImg.innerHTML = drawCarImage(newColor);
  carName.textContent = newName;
  updateCarName.value = '';
  updateCarBtn.setAttribute('disabled', 'disabled');
  inputsState.selectedCarId = 0;
  updateWinnersStore();
  updateInputsState();
}
