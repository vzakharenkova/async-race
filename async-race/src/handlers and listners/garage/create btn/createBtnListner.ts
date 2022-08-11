import { createBtnHandler } from './createBtnHandler';

export function createBtnListner() {
  const createCarBtn = document.getElementById('create_btn') as HTMLButtonElement;

  createCarBtn.addEventListener('click', createBtnHandler);
}
