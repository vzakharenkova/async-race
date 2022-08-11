import drawGarageView from '../../components/garage/drawGarageView';
import { inputsState } from '../../components/garage/garage manager/inputs/inputsState';
import { updateInputsValue } from '../../components/garage/garage manager/inputs/updateInputsValue';
import { updateWinnersStore } from '../../store/updateStore';
import { mutationObserve } from '../../helpers/mutationObserve';
import { updateAnimationHandler } from './race/animation/updateAnimationHandler';
import { removeBtnListner } from './remove btn/removeBtnListner';
import { updateBtnHandler } from './update btn/updateBtnHandler';

export function garageBtnListner() {
  const garageBtn = document.getElementById('garage_btn') as HTMLButtonElement;

  garageBtn.addEventListener('click', drawGarageView);
  garageBtn.addEventListener('click', updateAnimationHandler);
  garageBtn.addEventListener('click', updateInputsValue);
  garageBtn.addEventListener('click', updateWinnersStore);
  garageBtn.addEventListener('click', () => {
    if (inputsState.selectedCarId !== 0) {
      const updateCarBtn = document.getElementById('update_btn') as HTMLButtonElement;
      updateCarBtn.addEventListener('click', () => (updateBtnHandler(inputsState.selectedCarId)));
    }
  });
  garageBtn.addEventListener('click', removeBtnListner);
  garageBtn.addEventListener('click', mutationObserve);
}
