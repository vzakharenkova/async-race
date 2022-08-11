import './style.css';
import drawCommonView from './components/common view/drawCommonView';
import drawGarageView from './components/garage/drawGarageView';
import { addCommonListners } from './handlers and listners/commonListners';
import { removeBtnListner } from './handlers and listners/garage/remove btn/removeBtnListner';
import { mutationObserve } from './helpers/mutationObserve';

async function start() {
  drawCommonView();
  drawGarageView();
  addCommonListners();
  removeBtnListner();
  mutationObserve();
}

start();
