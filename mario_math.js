function next() {
  const num = 10 + Math.random() * 90;
  const num2 = Math.round(num);
  const num3 = 10 + Math.random() * 90;
  const num4 = Math.round(num3);
  $('#math').html(
    `mario had ${num2} coins then he got ${num4} more. how many coins does mario have?`
  );
}
