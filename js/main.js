'use strict';

(function () {
  var redColor = '#7e262e';
  var gradient = 'linear-gradient(60deg, rgb(126, 38, 46), rgb(199, 67, 80))';

  var Form = require('./app/form');
  var FormInput = require('./app/form-input');
  var Message = require('./app/message');
  var Button = require('./app/button');
  var Select = require('./app/select');
  var OpenButton = require('./app/open-button');
  var CloseButton = require('./app/close-button');
  var validate = require('./app/validate');

  var form = new Form({
    width: 300,
    padding: 25,
    bottom: 20,
    right: 20
  });
  var formEl = form.element;

  var nameInput = new FormInput({
    type: 'text',
    placeholder: 'Ваше имя'
  });
  var nameInputEl = nameInput.element;
  var emailInput = new FormInput({
    type: 'email',
    placeholder: 'Ваш email'
  });
  var emailInputEl = emailInput.element;
  var phoneInput = new FormInput({
    type: 'tel',
    placeholder: 'Ваш телефон',
    required: true,
    pattern: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'
  });
  var phoneInputEl = phoneInput.element;
  var message = new Message('В чём заключается ваш вопрос?');
  var messageEl = message.element;
  var button = new Button({
    text: 'Задать вопрос',
    type: 'submit',
    minWidth: 130,
    vPadding: 15,
    hPadding: 12
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

  var onFormSubmit = function (evt) {
    validate(evt.target);
    evt.preventDefault();
  };

  var openButton = new OpenButton({
    size: 60,
    color: redColor,
    gradient: gradient,
    right: 50,
    bottom: 50
  });
  var openButtonEl = openButton.element;

  var onOpenBtnClick = function (evt) {
    evt.preventDefault();
    document.querySelector('body').appendChild(formEl);
    document.querySelector('form').addEventListener('submit', onFormSubmit);
  };

  var closeButton = new CloseButton({
    size: 12
  });
  var closeButtonEl = closeButton.element;

  var onCloseBtnClick = function (evt) {
    evt.preventDefault();
    document.querySelector('body').removeChild(formEl);
  };

  formEl.appendChild(closeButtonEl);
  openButtonEl.addEventListener('click', onOpenBtnClick);
  closeButtonEl.addEventListener('click', onCloseBtnClick);
  document.querySelector('body').appendChild(openButtonEl);
})();
