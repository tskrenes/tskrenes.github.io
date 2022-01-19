let correct = 0;

$('#quiz-form').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer');
  let answer = $answer.val();
  console.log(answer);
  if (answer === 'cappy') {
    $('#result').text('You got it!');
    correct++;
  } else if (answer === 'default') {
    $('#result').text('');
  } else {
    $('#result').text('The correct answer is cappy');
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
  if (answer === 'bonneters') {
    $('#result2').text('You got it!');
    correct++;
  } else if (answer === 'default2') {
    $('#result2').text('');
  } else {
    $('#result2').text('The correct answer is bonneters');
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
  if (answer === 'broodal') {
    $('#result3').text('You got it!');
    correct++;
  } else if (answer === 'default3') {
    $('#result3').text('');
  } else {
    $('#result3').text(
      'The correct answer is spewart, rango, hariet, and topper'
    );
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
  if (answer === 'M&C') {
    $('#result4').text('You got it!');
    correct++;
  } else if (answer === 'default4') {
    $('#result4').text('');
  } else {
    $('#result4').text('The correct answer is Mario and Cappy');
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
  if (answer === 'bonneton') {
    $('#result5').text('You got it!');
    correct++;
  } else if (answer === 'default5') {
    $('#result5').text('');
  } else {
    $('#result5').text('The correct answer is bonneton');
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
  if (answer === 'pokio') {
    $('#result6').text('You got it!');
    correct++;
  } else if (answer === 'default6') {
    $('#result6').text('');
  } else {
    $('#result6').text('The correct answer is pokio');
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
  if (answer === '3') {
    $('#result7').text('You got it!');
    correct++;
  } else if (answer === 'default7') {
    $('#result7').text('');
  } else {
    $('#result7').text('The correct answer is 3');
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
  if (answer === 'captian toad') {
    $('#result8').text('You got it!');
    correct++;
  } else if (answer === 'default8') {
    $('#result8').text('');
  } else {
    $('#result8').text('The correct answer is captian toad');
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
  if (answer === 'yellow') {
    $('#result9').text('You got it!');
    correct++;
  } else if (answer === 'default9') {
    $('#result9').text('');
  } else {
    $('#result9').text('The correct answer is yellow');
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
  if (answer === 'power moon') {
    $('#result10').text('You got it!');
    correct++;
  } else if (answer === 'default10') {
    $('#result10').text('');
  } else {
    $('#result10').text('The correct answer power moons');
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
