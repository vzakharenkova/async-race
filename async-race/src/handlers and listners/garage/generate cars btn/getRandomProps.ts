export function getRandomNumber(min: number, max: number) {
  const minN = Math.ceil(min);
  const maxN = Math.floor(max);

  return Math.floor(Math.random() * (maxN - minN + 1)) + minN;
}

export function getRandomColor() {
  return `#${(`${Math.random().toString(16)}000000`).substring(2, 8).toUpperCase()}`;
}
