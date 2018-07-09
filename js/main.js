'use strict';

(function () {
  var gradient = 'linear-gradient(60deg, rgb(126, 38, 46), rgb(199, 67, 80))';

  var Form = require('./app/form');
  var FormInput = require('./app/form-input');
  var Message = require('./app/message');
  var Button = require('./app/button');
  var Select = require('./app/select');
  var OpenButton = require('./app/open-button');

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
    vPadding: 10,
    hPadding: 15
  });
  var buttonEl = button.element;
  var select = new Select(['Ростовкая обл.', 'Московская обл.', 'Ленинградская обл.']);
  var selectEl = select.element;

  formEl.appendChild(nameInputEl);
  formEl.appendChild(emailInputEl);
  formEl.appendChild(phoneInputEl);
  formEl.appendChild(selectEl);
  formEl.appendChild(messageEl);
  formEl.appendChild(buttonEl);

  var openButton = new OpenButton({
    size: 60,
    color: '#7e262e',
    gradient: gradient,
    right: 50,
    bottom: 50
  });
  var openButtonEl = openButton.element;

  var onOpenBtnClick = function (evt) {
    evt.preventDefault();
    document.querySelector('body').appendChild(formEl);
  };

  openButtonEl.addEventListener('click', onOpenBtnClick);
  document.querySelector('body').appendChild(openButtonEl);
})();
