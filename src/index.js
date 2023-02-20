import './assets/styles/index.scss';

const input = document.querySelector('.calculator__screen-input');
const btns = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.btn-exactly');
const removeBtn = document.querySelector('.btn-remove');

const onClick = (e) => {
  const onClickData = e.target.innerHTML.replace(/\s/g, '');
  input.value += onClickData;

  if (input.value === 'C') {
    input.value = '';
  }

  const equal = () => {
    const expression = input.value.replace('=', '');

    const result = eval(expression);
    input.value = result;

    if (input.value === undefined || result === undefined) {
      input.value = '';
    }
  };

  equalBtn.addEventListener('click', equal);
};

const removeClick = () => {
  input.value = '';
};

removeBtn.addEventListener('click', removeClick);

btns.forEach((btn) => {
  btn.addEventListener('click', onClick);
});
