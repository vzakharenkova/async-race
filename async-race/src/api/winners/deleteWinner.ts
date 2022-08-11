import { winners } from '../requestParams';

export async function deleteWinner(id: number) {
  const url = `${winners}/${id}`;

  (await fetch(url, {
    method: 'DELETE',
  })).json();
}
