import { garage } from "../../requestParams";
import { createCar } from "../createCar";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;
test('create new car', async () => {
  const body = { name: 'BMW', color: 'red'};
  const response = await createCar(body);
  expect(global.fetch).toBeCalledWith(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  expect(response).toEqual({ test: 100 });
});
