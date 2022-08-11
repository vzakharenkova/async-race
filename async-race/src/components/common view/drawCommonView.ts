import pageElements from '../../helpers/pageElements';
import { toggleDisable } from '../../helpers/toggleDisable';
import { drawElement } from './drawElement';

export default function drawCommonView() {
  const appWrapper = drawElement('div', 'app_wrapper', 'app_wrapper', '');
  const commonViewWrapper = drawElement('div', 'common_view_wrapper', 'common_view_wrapper', '');
  const navBtns = drawElement('div', 'nav_btns', 'nav_btns', '');
  const garageBtn = drawElement('button', 'garage_btn', 'btn garage_btnn', 'To garage', '#87CEFA') as HTMLButtonElement;
  const winnersBtn = drawElement('button', 'winners_btn', 'btn winners_btn', 'To winners', '#87CEFA') as HTMLButtonElement;
  const raceresult = drawElement('div', 'race_result', 'race_result', '') as HTMLButtonElement;

  toggleDisable(winnersBtn);
  pageElements.bodyElem
    .appendChild(appWrapper)
    .appendChild(commonViewWrapper)
    .append(navBtns, raceresult);
  navBtns.append(garageBtn, winnersBtn);
}
