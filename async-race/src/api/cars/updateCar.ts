import { CarUpdate } from '../../helpers/types';
import { garage } from '../requestParams';

export async function updateCar(id: number, body: CarUpdate) {
  const url = `${garage}/${id}`;

  (await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}
