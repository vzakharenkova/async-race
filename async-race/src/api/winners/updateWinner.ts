import { WinnerUpdate } from '../../helpers/types';
import { winners } from '../requestParams';

export async function updateWinner(id: number, body: WinnerUpdate) {
  const url = `${winners}/${id}`;

  (await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}
