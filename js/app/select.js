'use strict';

module.exports = function (values) {
  this.values = values;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('div');
      var select = document.createElement('select');
      var arrow = document.createElement('span');

      element.style.position = 'relative';
      arrow.style.position = 'absolute';
      arrow.style.top = '50%';
      arrow.style.right = '5px';
      arrow.style.width = '0';
      arrow.style.height = '0';
      arrow.style.border = '5px solid #000000';
      arrow.style.borderBottom = 'none';
      arrow.style.borderRightColor = 'transparent';
      arrow.style.borderLeftColor = 'transparent';
      arrow.style.transform = 'translateY(-50%)';
      select.style.boxSizing = 'border-box';
      select.style.padding = '10px 5px';
      select.style.width = '100%';
      select.style.marginBottom = '10px';
      select.style.MozAppearance = 'none';
      select.style.WebkitAppearance = 'none';

      this.values.forEach(function (it) {
        var option = document.createElement('option');

        option.value = it;
        option.textContent = it;

        select.appendChild(option);
      });

      element.appendChild(arrow);
      element.appendChild(select);

      return element;
    }
  });
};
