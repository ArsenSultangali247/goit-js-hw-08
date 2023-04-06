import throttle from 'lodash.throttle';
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');
const formEl = document.querySelector('form');


formEl.addEventListener(
  'input',
  throttle(() => {
    inputFoo();
  }, 500)
);

function inputFoo() {
  const data = {
    email: `${inputEl.value}`,
    message: `${textAreaEl.value}`,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

const parsedData = localStorage.getItem('feedback-form-state');
const dataValues = JSON.parse(parsedData);


if (dataValues !== null) {
  inputEl.value = dataValues.email;
  textAreaEl.textContent = dataValues.message;
}


formEl.addEventListener('submit', submitFoo);

function submitFoo(event){
    event.preventDefault();
let currentData = {
    email: inputEl.value, 
    message: textAreaEl.value
}
console.log(currentData);
localStorage.removeItem('feedback-form-state')

event.target.reset();
textAreaEl.textContent = ''

}
