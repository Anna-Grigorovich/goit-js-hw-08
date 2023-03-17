import throttle from 'lodash.throttle';

const fromEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const FORM_MSG = 'feedback-form-state';
const formData = {};

fromEl.addEventListener('submit', handleFormSub);
textareaEl.addEventListener('input', throttle(handleTextareaInput), 500);
fromEl.addEventListener('input', throttle(handleFormInput, 500));

populateInput();

function handleFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_MSG, JSON.stringify(formData));
}

function handleFormSub(evt) {
  evt.preventDefault();
  console.log(` Email:${formData.email}
  Message: ${formData.message}`);
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_MSG);
}

function handleTextareaInput(evt) {}

function populateInput() {
  const saveInput = JSON.parse(localStorage.getItem(FORM_MSG));
  console.log(saveInput);

  if (saveInput) {
    inputEl.value = saveInput.email;
    textareaEl.value = saveInput.message;
  }
}
