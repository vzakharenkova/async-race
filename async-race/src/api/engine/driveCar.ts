import { EngineDriveStatus } from '../../helpers/types';
import { engine } from '../requestParams';

export async function driveCar(id:number, status:EngineDriveStatus) {
  const url = `${engine}?id=${id}&status=${status}`;

  try {
    const response = await fetch(url, { method: 'PATCH' }).catch();
    return await response.json();
  } catch {
    return { success: false };
  }
}
