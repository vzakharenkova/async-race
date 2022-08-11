import { generateBtnListner } from './generate cars btn/generateBtnListner';
import { garagePaginationBtnListner } from './pagination/garagePaginationBtnListner';
import { createBtnListner } from './create btn/createBtnListner';
import { startAllBtnListner } from './race/start btn/startAllBtnListner';
import { resetAllBtnListner } from './race/reset btn/resetAllBtnListner';

export function addGarageListners() {
  generateBtnListner();
  garagePaginationBtnListner();
  createBtnListner();
  startAllBtnListner();
  resetAllBtnListner();
}
