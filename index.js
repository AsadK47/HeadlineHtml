function newElement(type, attrs={}) {
  const element = document.createElement(type);
  for (let attr in attrs) {
    const value = attrs[attr];
    if (attr == 'innerText') element.innerText = value;
    else element.setAttribute(attr, value);
  }
  return element;
}

const container = document.querySelector('.container');
const card = newElement('div', {class: 'card'});
container.appendChild(card);