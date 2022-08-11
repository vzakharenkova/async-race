import { Winner } from '../../helpers/types';
import { winners } from '../requestParams';

export async function getWinnerById(id: number) {
  const responce = await fetch(`${winners}/${id}`);

  if (responce.status !== 200) {
    return {
      winner: undefined,
    };
  }

  return {
    winner: await responce.json() as Winner,
  };
}
