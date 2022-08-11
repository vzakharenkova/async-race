import { garage } from '../requestParams';

export async function deleteCar(id: number) {
  const url = `${garage}/${id}`;
  (await fetch(url, {
    method: 'DELETE',
  })).json();
}
