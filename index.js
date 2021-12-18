function hideElement(id) {
  let selection = $('#' + id);
  selection.css('display', 'none');
}

function showElement(id) {
  let selection = $('#' + id);
  selection.css('display', 'block');
}

function changeText() {
  hideElement('div_sets');
  hideElement('div_prices');
  showElement('div_differentPrices');
  showElement('div_missingPieces');
}

function changeTextBack() {
  showElement('div_sets');
  showElement('div_prices');
  hideElement('div_differentPrices');
  hideElement('div_missingPieces');
}

$('#quiz-form').on('submit', function (event) {
  event.preventDefault();
  let $answer = $('#quiz-answer');
  let answer = $answer.val();
  if (answer === '$800') {
    $('#result').text('You got it!');
  } else if (answer === 'default') {
    $('#result').text('');
  } else {
    $('#result').text('Try again!');
  }
});

function hideElement2(className) {
  let selection = $('.' + className);
  selection.css('display', 'none');
}

function showElement2(className) {
  let selection = $('.' + className);
  selection.css('display', 'block');
}

function login() {
  let password = $('#inputPassword')[0].value;
  if (password === 'legoMario2022') {
    hideElement2('login');
    showElement2('page');
  } else {
    validate();
  }
}
function logout() {
  showElement2('login');
  hideElement2('page');
  $('#inputPassword')[0].value = '';
}

function luigiAnimation() {
  $('.luigi').slideUp(3000);
  $('.luigi').slideDown(3000);
  setInterval(luigiAnimation, 5000);
}

setInterval(luigiAnimation, 5000);

function marioAnimation() {
  $('.mario').slideUp(4000);
  $('.mario').slideDown(4000);
  setInterval(marioAnimation, 6000);
}

setInterval(marioAnimation, 6000);

function speechAnimation() {
  $('.speech').fadeIn(2000);
  $('.speech').fadeOut(2000);
  setInterval(speechAnimation, 4000);
}

setInterval(speechAnimation, 4000);

function validate() {
  let password = $('#inputPassword')[0].value;
  if (password === '') {
    alert('Please Fill Out This Field.');
  } else if (password.length <= 4) {
    alert('Password Must Be At Least 5 Characters Long.');
  } else if (password.length > 30) {
    alert('Password Must Be Less Than 30 Characters Long.');
  } else {
    alert('Wrong Password!');
  }
}
