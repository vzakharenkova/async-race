import { drawWinnersView } from '../../components/winners/drawWinnersView';
import { updateInputsState } from '../../components/garage/garage manager/inputs/updateInputsState';
import { updateGarageStore } from '../../store/updateStore';

export function winnerBtnListner() {
  const winnersBtn = document.getElementById('winners_btn') as HTMLElement;
  winnersBtn.addEventListener('click', () => updateInputsState());
  winnersBtn.addEventListener('click', drawWinnersView);
  winnersBtn.addEventListener('click', updateGarageStore);
}
