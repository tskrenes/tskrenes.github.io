let correct = 0;

$('#quiz-form').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'jumpman') {
    $('#result').text('You got it!');
    correct++;
  } else if (answer === 'default') {
    $('#result').text('');
  } else {
    $('#result').text('The correct answer is jumpman');
  }
  $('#butt').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form2').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer2');
  let answer = $answer.val();
  console.log(answer);
  if (answer === '1985') {
    $('#result2').text('You got it!');
    correct++;
  } else if (answer === 'default2') {
    $('#result2').text('');
  } else {
    $('#result2').text('The correct answer is 1985');
  }
  $('#butt2').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form3').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer3');
  let answer = $answer.val();
  console.log(answer);
  if (answer === '24-25') {
    $('#result3').text('You got it!');
    correct++;
  } else if (answer === 'default3') {
    $('#result3').text('');
  } else {
    $('#result3').text('The correct answer is 24-25');
  }
  $('#butt3').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form4').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer4');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'taller') {
    $('#result4').text('You got it!');
    correct++;
  } else if (answer === 'default4') {
    $('#result4').text('');
  } else {
    $('#result4').text(
      'The correct answer is luigi is taller and mario wears red'
    );
  }
  $('#butt4').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form5').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer5');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'his hand') {
    $('#result5').text('You got it!');
    correct++;
  } else if (answer === 'default5') {
    $('#result5').text('');
  } else {
    $('#result5').text('The correct answer is with his hand');
  }
  $('#butt5').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form6').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer6');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'waluigi') {
    $('#result6').text('You got it!');
    correct++;
  } else if (answer === 'default6') {
    $('#result6').text('');
  } else {
    $('#result6').text('The correct answer is waluigi');
  }
  $('#butt6').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form7').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer7');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'mega mushroom') {
    $('#result7').text('You got it!');
    correct++;
  } else if (answer === 'default7') {
    $('#result7').text('');
  } else {
    $('#result7').text('The correct answer is mega mushroom');
  }
  $('#butt7').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form8').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer8');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'lemmy') {
    $('#result8').text('You got it!');
    correct++;
  } else if (answer === 'default8') {
    $('#result8').text('');
  } else {
    $('#result8').text('The correct answer is lemmy');
  }
  $('#butt8').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form9').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer9');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'ice flower') {
    $('#result9').text('You got it!');
    correct++;
  } else if (answer === 'default9') {
    $('#result9').text('');
  } else {
    $('#result9').text('The correct answer is ice flower');
  }
  $('#butt9').on('click', function () {
    $(this).prop('disabled', true);
  });
});

$('#quiz-form10').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer10');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'purple') {
    $('#result10').text('You got it!');
    correct++;
    console.log(correct);
  } else if (answer === 'default10') {
    $('#result10').text('');
  } else {
    $('#result10').text('The correct answer purple');
  }

  let num = 10;
  if (correct <= 3) {
    $('.mario').text(`Nice Try. You got ${correct}/${num} correct.`);
  } else if (correct <= 6) {
    $('.mario').text(`Good job. You got ${correct}/${num} correct.`);
  } else if (correct < 9) {
    $('.mario').text(`Wow! You got ${correct}/${num} correct.`);
  } else {
    $('.mario').text(`Your a Mario master! You got ${correct}/${num} correct.`);
  }

  $('#butt10').on('click', function () {
    $(this).prop('disabled', true);
  });
});
