'use strict';

var setSelectStyle = require('./../style/set-select-style');

module.exports = function (values) {
  this.values = values;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('div');
      var select = document.createElement('select');
      var arrow = document.createElement('span');

      this.values.forEach(function (it) {
        var option = document.createElement('option');

        option.value = it;
        option.textContent = it;

        select.appendChild(option);
      });

      element.appendChild(arrow);
      element.appendChild(select);

      setSelectStyle(element);

      return element;
    }
  });
};
