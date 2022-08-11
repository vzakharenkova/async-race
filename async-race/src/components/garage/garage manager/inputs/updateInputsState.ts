import { inputsState } from './inputsState';

export function updateInputsState(id?: number) {
  const createCarInput = document.getElementById('create_car_input') as HTMLInputElement;
  const updateCarInput = document.getElementById('update_car_input') as HTMLInputElement;
  const createCarColor = document.getElementById('create_car_color') as HTMLInputElement;
  const updateCarColor = document.getElementById('update_car_color') as HTMLInputElement;
  inputsState.createText = createCarInput.value;
  inputsState.updateText = updateCarInput.value;
  inputsState.createColor = createCarColor.value;
  inputsState.updateColor = updateCarColor.value;

  if (id) {
    inputsState.selectedCarId = id;
  }
}
