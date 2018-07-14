'use strict';

var TIMEOUT = 10000;
var STATUS_OK = 200;

var prepareXHR = function (onSuccess, onError) {
  var xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === STATUS_OK) {
      onSuccess(xhr.response);
    } else {
      onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
    }
  });
  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });
  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = TIMEOUT;

  return xhr;
};

module.exports = {
  load: function (props) {
    var xhr = prepareXHR(props.onLoad, props.onError);

    xhr.open('GET', props.url);
    xhr.send();
  },

  save: function (props) {
    var xhr = prepareXHR(props.onLoad, props.onError);

    xhr.open('POST', props.url);
    xhr.send(props.data);
  }
};
