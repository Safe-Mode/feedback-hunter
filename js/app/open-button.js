'use strict';

var MEASURE = 'px';
var setOpenBtnStyle = require('./../style/set-open-btn-style');

var btnImageSrc = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA5MTIuMSA5MTIuMSIgc3R5bGU9ImZpbGw6ICNmZmZmZmYiPiAgPGc+ICA8Zz4gIDxwYXRoIGQ9Ik01MDQuNjA3LDU3NC45YzEwMi44LDAsMTg2LjQtODMuNjAxLDE4Ni40LTE4Ni40cy04My42MDEtMTg2LjQtMTg2LjQtMTg2LjRjLTEwMi43OTksMC0xODYuNCw4My42LTE4Ni40LDE4Ni40ICBTNDAxLjgwOCw1NzQuOSw1MDQuNjA3LDU3NC45eiIvPiAgPGc+ICA8cGF0aCBkPSJNMzQ2LjEwOCw2MTEuOWMtNzEuOCwwLTEzMCw1OC4xOTktMTMwLDEzMFY4ODcuMWMwLDEzLjgwMSwxMS4yLDI1LDI1LDI1aDUyN2MxMy44LDAsMjUtMTEuMTk5LDI1LTI1Vjc0NS41ICBjMi4yLTMuOCw0LjItNy45LDUuOC0xMi4ybDEwMi0yNzBjMy40LTksNS4yLTE4LjYsNS4yLTI4LjNWMTMyYzAtNDQuMi0zNS44LTgwLTgwLTgwcy04MCwzNS44LTgwLDgwdjI4OC40bC03Mi4zLDE5MS41SDM0Ni4xMDh6ICAiLz4gIDxwYXRoIGQ9Ik0zMC44MDgsMTc4LjFoNTljMTIuNCwwLDIyLjktOSwyNC43LTIxLjJjMy40LTIyLjIsMTAuMy0zOC42LDIwLjUtNDguNWM5LjUtOS4yLDIyLjYtMTMuNyw0MC4yLTEzLjcgIGMxOC4yLDAsMzIuMSw1LDQyLjcsMTUuNGMxMC42LDEwLjQsMTUuNSwyMi45LDE1LjUsMzkuNWMwLDcuOC0xLjgsMTUtNS41LDIyYy0xLjksMy41LTkuMywxNC4zLTM3LjUsMzguMiAgYy0yNi4yLDIyLjItNDMuOSw0My4xLTU0LjIsNjMuOGMtMTAuNSwyMS4xLTE1LjYsNTEuOC0xNS42LDkzLjZsMCwwYzAsMTMuOCwxMS4yLDI1LDI1LDI1aDUzLjNjMTMuOCwwLDI1LTExLjIsMjUtMjVsMCwwICBjMC0zMi4zLDMuOS00NS41LDYuMi01MC41YzEuOC00LDkuMy0xNS44LDM5LTQwLjRjMjcuNi0yMi45LDQ2LjItNDMuOCw1Ni44LTYzLjhjMTAuOS0yMC41LDE2LjQtNDMsMTYuNC02Ni44ICBjMC00Mi41LTE2LjEwMS03OC00OC0xMDUuNmMtMzAuOC0yNi42LTcxLTQwLjEtMTE5LjUtNDAuMWMtNDYuMiwwLTg1LjMsMTMuOC0xMTYsNDAuOWMtMzEsMjcuNC00OC43LDY0LjUtNTIuNywxMTAuMmwwLDAgIEM0LjcwOCwxNjUuNSwxNi4yMDgsMTc4LjEsMzAuODA4LDE3OC4xeiIvPiAgPHBhdGggZD0iTTE5OC43MDgsNTMzLjZjMTMuOCwwLDI1LTExLjE5OSwyNS0yNVY0NTUuNGMwLTEzLjgwMS0xMS4yLTI1LTI1LTI1aC01My4yYy0xMy44LDAtMjUsMTEuMTk5LTI1LDI1VjUwOC42ICBjMCwxMy44MDEsMTEuMiwyNSwyNSwyNUgxOTguNzA4eiIvPiAgPC9nPiAgPC9nPiAgPC9nPjwvc3ZnPg==';

module.exports = function (props) {
  this.size = (typeof props.size === 'number') ? props.size + MEASURE : props.size;
  this.bottom = (typeof props.bottom === 'number') ? props.bottom + MEASURE : props.bottom;
  this.right = (typeof props.right === 'number') ? props.right + MEASURE : props.right;
  this.color = props.color;
  this.gradient = props.gradient;

  Object.defineProperty(this, 'element', {
    get: function () {
      var element = document.createElement('button');
      var image = document.createElement('img');

      image.src = btnImageSrc;
      element.style.width = this.size;
      element.style.height = this.size;
      element.style.backgroundColor = this.color;
      element.style.right = this.right;
      element.style.bottom = this.bottom;
      element.style.backgroundImage = this.gradient;

      element.appendChild(image);
      setOpenBtnStyle(element);

      return element;
    }
  });
};
