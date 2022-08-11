import { resetCarBtnListner } from './race/reset btn/resetCarBtnListner';
import { selectBtnListner } from './select btn/selectBtnListner';
import { startCarBtnListner } from './race/start btn/startCarBtnListner';

export function addTrackListners() {
  selectBtnListner();
  startCarBtnListner();
  resetCarBtnListner();
}
