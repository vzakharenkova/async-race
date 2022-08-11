import { garage } from '../requestParams';

export async function getCars(page: number, limit = 7) {
  const responce = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await responce.json(),
    amount: responce.headers.get('X-Total-Count') as string,
  };
}
