const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';

const box = document.getElementById('box');
const select = document.getElementById('color-select');

function handleClick(e) {
  const {value} = e.target;
  if (value === '') {
    box.style.backgroundColor = defaultColor;
  } else {
    box.style.backgroundColor = value;

    window.setTimeout(() => {
      box.style.backgroundColor = defaultColor;
    }, 1000);
  }
}

const createOption = item => {
  const option = document.createElement('option');
  const node = document.createTextNode(item);
  option.value = item;
  option.appendChild(node);
  return option;
};

data.forEach(item => {
  select.appendChild(createOption(item));
});

select.addEventListener('change', handleClick);
