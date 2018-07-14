'use strict';

var START_OPACITY = 0.1;
var END_OPACITY = 0.7;
var ANIMATION_STEP = 0.1;
var ANIMATION_TIME = 100;

module.exports = function (element) {
  element.style.position = 'fixed';
  element.style.borderRadius = '50%';
  element.style.border = 'none';
  element.style.cursor = 'pointer';
  element.style.outline = 'none';

  var opacity = START_OPACITY;

  var animateBlink = function (elem) {
    var dec = function () {
      if (opacity > START_OPACITY) {
        opacity = opacity - START_OPACITY;
        elem.style.boxShadow = '0 0 30px rgba(255, 0, 0, ' + opacity + ')';
        setTimeout(function () {
          dec();
        }, ANIMATION_TIME);
      } else {
        inc();
      }
    };

    var inc = function () {
      if (opacity < END_OPACITY) {
        opacity = opacity + ANIMATION_STEP;
        elem.style.boxShadow = '0 0 30px rgba(255, 0, 0, ' + opacity + ')';
        setTimeout(function () {
          inc();
        }, ANIMATION_TIME);
      } else {
        dec();
      }
    };

    inc();
  };

  animateBlink(element);

  var img = element.querySelector('img');

  img.style.width = '70%';
  img.style.margin = '0 auto';
};
