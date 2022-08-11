import { garage } from "../../requestParams";
import { deleteCar } from "../deleteCar";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;
test('delete car', async () => {
  const id = Math.floor(Math.random() * 10);
  const url = `${garage}/${id}`;
  await deleteCar(id);
  expect(global.fetch).toBeCalledWith(url, {
    method: 'DELETE',
  });
});
