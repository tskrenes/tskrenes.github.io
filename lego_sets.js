function submit() {
  let checkbox = $('.box1')[0];
  let checkbox2 = $('.box2')[0];
  let checkbox3 = $('.box3')[0];
  let checkbox4 = $('.box4')[0];
  let checkbox5 = $('.box5')[0];
  let checkbox6 = $('.box6')[0];
  if (checkbox.checked === true && checkbox2.checked === true) {
    alert('You will probably like mario lego');
  } else if (
    (checkbox6.checked === true &&
      checkbox5.checked === true &&
      checkbox4.checked === true &&
      checkbox3.checked === true) ||
    (checkbox5.checked === true && checkbox6.checked === true)
  ) {
    alert('You will probably like video games');
  } else if (checkbox5.checked === true) {
    alert('You will probably like lego and mario lego');
  } else {
    alert("I don't know what you like");
  }
}
