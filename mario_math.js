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

function next2() {
  const num5 = 100 + Math.random() * 200;
  num6 = Math.round(num5);
  $('#math2').html(
    `mario, peach, toad, luigi, wario, and donkey kong each have ${num6} coins. how many do they have in total?`
  );
}

function check2() {
  let answer = $('#answer2')[0].value;
  if (answer == 6 * num6) {
    alert('correct!');
  } else {
    alert('try again.');
  }
}
