'use strict';

module.exports = function (placeholder) {
  this.placeholder = placeholder;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('textarea');

      element.style.boxSizing = 'border-box';
      element.style.padding = '10px 5px';
      element.style.width = '100%';
      element.style.height = '150px';
      element.style.marginBottom = '10px';
      element.style.resize = 'none';

      element.placeholder = this.placeholder;

      return element;
    }
  });
};
