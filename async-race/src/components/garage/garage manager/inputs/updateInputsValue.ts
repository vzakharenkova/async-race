import { inputsState } from './inputsState';

export function updateInputsValue() {
  const createCarInput = document.getElementById('create_car_input') as HTMLInputElement;
  const updateCarInput = document.getElementById('update_car_input') as HTMLInputElement;
  const createCarColor = document.getElementById('create_car_color') as HTMLInputElement;
  const updateCarColor = document.getElementById('update_car_color') as HTMLInputElement;
  createCarInput.value = inputsState.createText;
  updateCarInput.value = inputsState.updateText;
  createCarColor.value = inputsState.createColor;
  updateCarColor.value = inputsState.updateColor;
}
