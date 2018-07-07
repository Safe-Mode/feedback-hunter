'use strict';

(function () {
  var Form = require('./app/form');
  var FormInput = require('./app/form-input');
  var Message = require('./app/message');
  var Button = require('./app/button');
  
  var form = new Form({
    width: 300,
    padding: 20,
    bottom: 20,
    right: 20
  });
  var formEl = form.element;
  
  var nameInput = new FormInput('text', 'Ваше имя');
  var nameInputEl = nameInput.element;
  var emailInput = new FormInput('email', 'Ваш email');
  var emailInputEl = emailInput.element;
  var phoneInput = new FormInput('tel', 'Ваш телефон');
  var phoneInputEl = phoneInput.element;
  var message = new Message('В чём заключается ваш вопрос?');
  var messageEl = message.element;
  var button = new Button({
    text: 'Задать вопрос',
    type: 'submit',
    minWidth: 130,
    vPadding: 5,
    hPadding: 10
  });
  var buttonEl = button.element;
  
  formEl.appendChild(nameInputEl);
  formEl.appendChild(emailInputEl);
  formEl.appendChild(phoneInputEl);
  formEl.appendChild(messageEl);
  formEl.appendChild(buttonEl);
  
  document.querySelector('body').appendChild(formEl);
})();