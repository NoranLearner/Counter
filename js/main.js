/* alert('hello js'); */

/* document.getElementById('wow').innerHTML = 'Hello Js';

document.getElementById('wow').style.color = '#ff0000';

document.getElementById('wow').style.fontSize = '50px';

window.alert('Hi');

document.write(5 * 6); */

/* var x = 'Ahmed'; */

/* var
  x = 5,
  y = 6,
  z = x + y;

console.log(z);

document.getElementById('wow').innerHTML = z; */

/* var x = 24;
x++

document.getElementById('wow').innerHTML = x; */

/* var x = 24;
x += 24; // x = x + 24
console.log(x); */

/* var
  myName = 'Noran',
  age = 28,
  success = true,
  favoriteName = ["nor", "ahmed", "sameh"],
  my = {name: 'ahmed', age: 24};
console.log(typeof myName);
console.log(typeof age);
console.log(typeof success);
console.log(typeof favoriteName);
console.log(favoriteName[0]);
console.log(typeof my);
console.log(my.age);
console.log(my['age']); */

/* function myFunc (a, b) {
  return a * b;
}

document.getElementById('wow').innerHTML = myFunc(2, 3);
 */

/* function displayWow () {
  var x = 3;
  var y = 6;
  var z = x * y;
  document.getElementById('wow').innerHTML = z;
}
displayWow();
 */

/* function whatName (params) {
  var yourName = prompt('what is your name?');
  document.getElementById('wow').innerHTML = 'My Name is ' + yourName;
  document.getElementById('wow').style.color = 'red';
  document.getElementById('wow').style.fontSize = '20px';
} */
/* whatName(); */

var counter = 0;

function count (params) {
  counter++;
  document.getElementById('wow').innerHTML = counter
}
