import { generateBtnHandler } from './generateBtnHandler';

export function generateBtnListner() {
  const generateCarsBtn = document.getElementById('generate_cars_btn') as HTMLButtonElement;

  generateCarsBtn.addEventListener('click', () => generateBtnHandler(100));
}
