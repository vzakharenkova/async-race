import { Car } from '../../helpers/types';
import { garage } from '../requestParams';

export async function getCarById(id: number) {
  const responce = await fetch(`${garage}/${id}`);

  return {
    car: await responce.json() as Car,
  };
}
