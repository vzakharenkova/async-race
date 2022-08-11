import { toggleDisable } from '../../../helpers/toggleDisable';
import { drawElement } from '../../common view/drawElement';
import { drawInput } from './inputs/drawInput';
import { inputsState } from './inputs/inputsState';

export default function drawGarageManagerView() {
  const appWrapper = document.getElementById('app_wrapper') as HTMLElement;
  const garage = drawElement('div', 'garage', 'garage', '');
  const garageManagerWrapper = drawElement('div', 'garage_manager_wrapper', 'garage_manager_wrapper', '');
  const carsManager = drawElement('div', 'cars_manager', 'cars_manager', '');
  const createCarField = drawElement('div', 'create_car_field', 'create_car_field', '');
  const updateCarField = drawElement('div', 'update_car_field', 'update_car_field', '');
  const carsManagerControllers = drawElement('div', 'cars_manager_controllers', 'cars_manager_controllers', '');
  const createCarInput = drawInput(drawElement('input', 'create_car_input', 'text_input', ''), 'text') as HTMLInputElement;
  const updateCarInput = drawInput(drawElement('input', 'update_car_input', 'text_input', ''), 'text') as HTMLInputElement;
  const createCarColor = drawInput(drawElement('input', 'create_car_color', 'color_input', ''), 'color') as HTMLInputElement;
  const updateCarColor = drawInput(drawElement('input', 'update_car_color', 'color_input', ''), 'color') as HTMLInputElement;
  const createCarBtn = drawElement('button', 'create_btn', 'btn create_btn', 'create', '#FFE4B5');
  const updateCarBtn = drawElement('button', 'update_btn', 'btn update_btn', 'update', '#FFE4B5');

  if (inputsState.selectedCarId === 0) {
    updateCarBtn.setAttribute('disabled', 'disabled');
  }

  const startRaceBtn = drawElement('button', 'start_race_btn', 'btn start_race_btn', 'start', '#90EE90');
  const resetRaceBtn = drawElement('button', 'reset_race_btn', 'btn reset_race_btn', 'reset', '#90EE90') as HTMLButtonElement;
  const generateCarsBtn = drawElement('button', 'generate_cars_btn', 'btn generate_cars_btn', 'generate cars', '#90EE90');

  createCarInput.value = inputsState.createText;
  updateCarInput.value = inputsState.updateText;
  createCarColor.value = inputsState.createColor;
  updateCarColor.value = inputsState.updateColor;
  appWrapper.appendChild(garage).append(garageManagerWrapper);
  garageManagerWrapper.append(carsManager);
  carsManager.append(createCarField, updateCarField, carsManagerControllers);
  createCarField.append(createCarInput, createCarColor, createCarBtn);
  updateCarField.append(updateCarInput, updateCarColor, updateCarBtn);
  carsManagerControllers.append(startRaceBtn, resetRaceBtn, generateCarsBtn);
  toggleDisable(resetRaceBtn);
}
