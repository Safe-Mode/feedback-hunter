'use strict';

var styleError = require('./../style/style-error');

var errorStyle = '0 0 5px rgba(199, 67, 80, 0.3)';
var errorsMap = {
  tel: 'Введите валидный номер телефона',
  email: 'Введите валидный email'
};

module.exports = function (form) {
  var validate = function (input) {
    var error = document.createElement('p');

    error.classList.add('error');
    styleError(error);

    if (input.validity.valueMissing) {
      error.textContent = 'Это поле обязательно для заполнения';
    } else if (input.validity.patternMismatch) {
      error.textContent = errorsMap[input.type];
    } else if (input.validity.typeMismatch) {
      error.textContent = errorsMap[input.type];
    }

    input.insertAdjacentElement('afterend', error);
  };

  var fields = [].slice.call(form.querySelectorAll('input'))
      .concat([].slice.call(form.querySelectorAll('textarea')));

  fields.forEach(function (field) {
    if (field.nextElementSibling && field.nextElementSibling.classList.contains('error')) {
      field.parentElement.removeChild(field.nextElementSibling);
    }

    if (field.checkValidity() === false) {
      validate(field);
      field.style.boxShadow = errorStyle;
    } else {
      field.style.boxShadow = 'none';
    }
  });
};
