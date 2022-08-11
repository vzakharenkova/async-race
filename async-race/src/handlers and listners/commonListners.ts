import { garageBtnListner } from './garage/garageBtnListner';
import { winnerBtnListner } from './winners/winnerBtnListner';

export function addCommonListners() {
  winnerBtnListner();
  garageBtnListner();
}
