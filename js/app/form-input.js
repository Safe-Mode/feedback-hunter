'use strict';

module.exports = function (type, placeholder) {
  this.type = type;
  this.placeholder = placeholder;
  
  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('input');
      
      element.style.boxSizing = 'border-box';
      element.style.padding = '10px 5px';
      element.style.width = '100%';
      element.style.marginBottom = '10px';
      
      element.type = this.type;
      element.placeholder = this.placeholder;
      
      return element;
    }
  });
};