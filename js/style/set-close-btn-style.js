'use strict';

module.exports = function (element) {
  element.style.position = 'absolute';
  element.style.top = '10px';
  element.style.right = '10px';
  element.style.padding = 0;
  element.style.backgroundColor = 'transparent';
  element.style.border = 'none';
  element.style.cursor = 'pointer';
  element.querySelector('img').style.display = 'block';
  element.querySelector('img').style.width = '100%';
};
