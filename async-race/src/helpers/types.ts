export type Sort = 'id'|'wins'|'time'|null;
export type Order = 'ASC'|'DESC'|null;
export type View = 'garage' | 'winners';
export type EngineSatus = 'started' | 'stopped';
export type EngineDriveStatus = 'drive';
export type SortingColumn = 'wins' | 'time';
export type Winner = {
  id: number,
  wins: number,
  time: number
}
export type WinnerUpdate = {
  wins: number,
  time: number
}
export type WinnerToDisplay = {
  car: Car,
  id: number,
  wins: number,
  time: number
}
export type Car = {
  name: string,
  color: string,
  id: number
}
export type CarUpdate = {
  name: string,
  color: string,
}
export type Store = {
  cars: Array<Car>,
  carsAmount: string,
  currentCarsPage: number,
  winners: Array<WinnerToDisplay>,
  winnersAmount: string,
  currentWinnersPage: number,
  sort: Sort,
  order: Order,
  view: View
}
export type AnimationStateItem = {
  id: number,
  animation: Animation | null,
  start: number,
  time: number,
  resultTime: number,
  finish: number,
  status: boolean | null,
  stoptime: number,
  startPosition: number,
  stopPosition: number,
}
export type AnimationState = Array<AnimationStateItem>;
export type RaceResult = {
  id: number,
  time: number,
}
export type RaceResultStore = Array<RaceResult>;
export type InputsState = {
  createText: string,
  createColor: string,
  updateText: string,
  updateColor: string,
  selectedCarId: number,
}
export type Limit = 7 | 10;
