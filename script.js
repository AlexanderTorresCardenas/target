var body = document.body;
var btn = document.getElementById('button');
var container = document.getElementById('container');
container.addEventListener('click', function(event) {
  if (event.currentTarget === container) {
    alert("container event listener: current target: container");
  } else {
    alert("container event listener: current target: NOT container");
  }
  if (event.target === btn) {
    alert("container event listener: target: btn");
  } else {
    alert("container event listener: target: NOT btn");
  }
}, false);
btn.addEventListener('click', function(event) {
  if (event.currentTarget === btn) {
    alert("btn event listener: current target: btn");
  } else {
    alert("btn event listener: current target: NOT btn");
  }
  if (event.target === btn) {
    alert("btn event listener: target: btn");
  } else {
    alert("btn event listener: target: NOT btn");
  }
}, false);
