import { CarUpdate } from '../../helpers/types';
import { garage } from '../requestParams';

export async function createCar(body: CarUpdate) {
  const url = garage;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}
