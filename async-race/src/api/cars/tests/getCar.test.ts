import { garage } from "../../requestParams";
import { getCarById } from "../getCar";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;
test('get car', async () => {
  const id = Math.floor(Math.random() * 10);
  const url = `${garage}/${id}`;
  const response = await getCarById(id);
  expect(global.fetch).toBeCalledWith(url);
  expect(response).toEqual({car: { test: 100 }});
});
