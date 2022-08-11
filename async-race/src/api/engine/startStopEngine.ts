import { EngineSatus } from '../../helpers/types';
import { engine } from '../requestParams';

export async function startStopEngine(id:number, status:EngineSatus) {
  const url = `${engine}?id=${id}&status=${status}`;
  const resronse = await fetch(url, { method: 'PATCH' });

  return resronse.json();
}
