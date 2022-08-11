import { Winner } from '../../helpers/types';
import { winners } from '../requestParams';

export async function createWinner(body: Winner) {
  const url = winners;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const newWinner = await response.json();

  return newWinner;
}
