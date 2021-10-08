let num2, num4;

function next() {
  const num = 10 + Math.random() * 90;
  num2 = Math.round(num);
  const num3 = 10 + Math.random() * 90;
  num4 = Math.round(num3);
  $('#math').html(
    `mario had ${num2} coins then he got ${num4} more. how many coins does mario have?`
  );
}

function check() {
  let answer = $('#answer')[0].value;
  if (answer == num2 + num4) {
    alert('correct!');
  } else {
    alert('try again.');
  }
}

let num6;
let num8;

function next2() {
  const num5 = 10000 + Math.random() * 490000;
  num6 = Math.round(num5);
  const num7 = 10000 + Math.random() * 490000;
  num8 = Math.round(num7);
  $('#math2').html(
    `mario has ${num6} coins and peach has ${num8} coins do they have in total?`
  );
}

function check2() {
  let answer = $('#answer2')[0].value;
  if (answer == num8 + num6) {
    alert('correct!');
  } else {
    alert('try again.');
  }
}
