import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hellooo', 'webpack'], ' ');
    return element;
  }

  let element = component(); // Store the element to re-render on print.js changes
  document.body.appendChild(element);



