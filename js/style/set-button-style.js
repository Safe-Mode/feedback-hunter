'use strict';

module.exports = function (element) {
  var gradient = 'linear-gradient(60deg, rgb(126, 38, 46), rgb(199, 67, 80))';

  element.style.display = 'block';
  element.style.boxSizing = 'border-box';
  element.style.color = '#ffffff';
  element.style.border = '1px solid transparent';
  element.style.borderRadius = '5px';
  element.style.backgroundColor = '#ffffff';
  element.style.backgroundImage = gradient;
  element.style.outline = 'none';
  element.style.cursor = 'pointer';
  element.style.lineHeight = '1';

  var toggleActiveState = function (button) {
    button.style.borderColor = (button.style.borderColor === 'transparent') ? '#7e262e' : 'transparent';
    button.style.backgroundImage = (button.style.backgroundImage === gradient) ? 'none' : gradient;
    button.style.color = (button.style.color === 'rgb(255, 255, 255)') ? '#7e262e' : '#ffffff';
  };

  var onMouseOver = function (evt) {
    toggleActiveState(evt.currentTarget);
    evt.currentTarget.removeEventListener('mouseover', onMouseOver);
    evt.currentTarget.addEventListener('mouseout', onMouseOut);
  };

  var onMouseOut = function (evt) {
    toggleActiveState(evt.currentTarget);
    evt.currentTarget.removeEventListener('mouseout', onMouseOut);
    evt.currentTarget.addEventListener('mouseover', onMouseOver);
  };

  var onFocus = function (evt) {
    toggleActiveState(evt.currentTarget);
    evt.currentTarget.removeEventListener('mouseover', onMouseOver);
    evt.currentTarget.addEventListener('mouseout', onMouseOut);
  };

  var onBlur = function (evt) {
    toggleActiveState(evt.currentTarget);
    evt.currentTarget.removeEventListener('mouseout', onMouseOut);
    evt.currentTarget.addEventListener('mouseover', onMouseOver);
  };

  var onMouseDown = function (evt) {
    toggleActiveState(evt.currentTarget);
    evt.currentTarget.style.opacity = '0.6';
  };

  var onMouseUp = function (evt) {
    evt.currentTarget.style.opacity = '1';
  };

  element.addEventListener('mouseover', onMouseOver);
  element.addEventListener('mouseout', onMouseOut);
  element.addEventListener('focus', onFocus);
  element.addEventListener('blur', onBlur);
  element.addEventListener('mousedown', onMouseDown);
  element.addEventListener('mouseup', onMouseUp);
};
