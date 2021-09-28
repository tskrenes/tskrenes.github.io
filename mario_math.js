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
