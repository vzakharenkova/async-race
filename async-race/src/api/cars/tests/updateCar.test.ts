import { getRandomColor } from "../../../handlers and listners/garage/generate cars btn/getRandomProps";
import { garage } from "../../requestParams";
import { updateCar } from "../updateCar";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;
test('update car', async () => {
  const id = Math.floor(Math.random() * 10);
  const url = `${garage}/${id}`;
  const color = getRandomColor();
  const body = { name: 'BMW', color: color};
  await updateCar(id, body);
  expect(global.fetch).toBeCalledWith(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
