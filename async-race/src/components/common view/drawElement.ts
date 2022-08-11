export function drawElement(
  elenent: string,
  id: string,
  className: string,
  innerText: string,
  color?: string,
): HTMLElement {
  const elem: HTMLElement = document.createElement(elenent);
  elem.setAttribute('id', id);
  elem.className = className;
  elem.innerText = innerText;
  if (color) {
    elem.style.backgroundColor = color;
  }
  return elem;
}
